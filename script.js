function setGridSize() {
    const grid = document.getElementById("grid");
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


/** main */
let NUMSQUARES = 16;
setGridSize(NUMSQUARES);
let gridSizePromptButton = document.getElementById("changeGridSize");

