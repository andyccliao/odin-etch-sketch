function setGridSize() {
    const grid = document.getElementById("grid");
    grid.replaceChildren();
    grid.style.gridTemplateRows = `repeat(${NUMSQUARES}, 1fr)`;
    grid.style.gridTemplateColumns = `repeat(${NUMSQUARES}, 1fr)`;
    let SQUAREWIDTH = grid.clientWidth / NUMSQUARES;
    for (let i=0; i<NUMSQUARES; i++) {
        for (let j=0; j<NUMSQUARES; j++) {
            let square = document.createElement("div");
            //square.setAttribute("style", `width:${SQUAREWIDTH}px; height:${SQUAREWIDTH}px`);
            //square.setAttribute("grid-row", `${i} / span 1`);
            //square.setAttribute("grid-column", `${j} / span 1`);
            square.classList.add("gridSquare");
            grid.append(square);
        }
    }
}

const RMASK = 0xFF0000;
const GMASK = 0x00FF00;
const BMASK = 0x0000FF;

function addBlackening() {
    const grid = document.getElementById("grid");
    console.log(grid.childNodes);
    grid.childNodes.forEach((node) => {
        node.setAttribute('light-level', 10);
        node.classList.add(`blacken${node.getAttribute('light-level')}`);
        node.addEventListener('mouseout', 
            (e)=>{
                let lightness = e.target.getAttribute('light-level');
                if (lightness < 0) return;
                node.classList.remove(`blacken${lightness}`);
                node.classList.add(`blacken${lightness-1}`);
                e.target.setAttribute('light-level', lightness-1);
            });
    });
}


/** main */
let NUMSQUARES = 16;
setGridSize(NUMSQUARES);
addBlackening();
let gridSizePromptButton = document.getElementById("changeGridSize");

gridSizePromptButton.addEventListener('click', () => {
    let response = prompt("How many squares per side would you like? From 1 - 100:", NUMSQUARES);
    if (response == null) return;
    NUMSQUARES = +response;
    console.log(NUMSQUARES);
    while (Number.isNaN(NUMSQUARES) || NUMSQUARES > 100 || NUMSQUARES < 1) {
        response = prompt("Try again. How many squares per side would you like? From 1 - 100:", NUMSQUARES);
        if (response == null) return;
        NUMSQUARES = +response;
    }
    setGridSize(NUMSQUARES);
    addBlackening();
})
