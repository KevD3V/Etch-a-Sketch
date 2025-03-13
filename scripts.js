/**
 * Reference to DOM elements
 */

const board = document.querySelector(".board");
const tile = document.createElement("div");
const newPadBTN = document.querySelector(".newPadBTN");

/**
 * Set up event listeners
 */
board.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (checkIfTile(target)) {
        changeTile(target);
    }
});

newPadBTN.addEventListener("click", () => {
    createNewPad();
});






/***
 * Creates a grid of tiles based on the numberOfTiles, one row at a time.
 */
function createTiles(numberOfTiles) {

    for (let i = 0; i < numberOfTiles; i++) {
        // Create row div and append to board as a child.
        let row = document.createElement("div");
        row.setAttribute("class", "row");
        board.appendChild(row);

        for (let j = 0; j < numberOfTiles; j++) {
            let newTile = document.createElement("div");
            newTile.setAttribute("class", "tile");
            row.appendChild(newTile);
        }
    }
}


/***
 * Clears all tiles from the grid.
 */
function clearTiles() {
    while (board.firstChild) {
        board.removeChild(board.firstChild);
    }
}

/***
 * Create new pad with dimensions provided by user.
 * Dimensions must be a whole number from 1 to 100.
 */
function createNewPad() {
    let size = prompt("Enter a size between 1 and 100.", 0);
    if (size > 100 || size < 1) {
        console.log("Size is out of bounds: " + size);
    }
    else {
        clearTiles();
        createTiles(size);
    }
}

/**
 * Change tile to random color and increase opacity by 10% 
 */
function changeTile(target) {
    // Use classes to control opacity.
    // implement a switch statement for each class.

}

/**
 * Check to see if target is a tile.
 */
function checkIfTile(target) {
    if (target.getAttribute("class") === "tile") {
        return true;
    }
    else {
        return false;
    }
}