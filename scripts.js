/**
 * Reference to DOM elements
 */

const board = document.querySelector(".board");
const tile = document.createElement("div");

const grid16 = document.querySelector(".grid16");
const grid32 = document.querySelector(".grid32");
const grid64 = document.querySelector("grid64");


/**
 * Set up event listeners
 */
board.addEventListener("mouseover", (event) => {
    let target = event.target;

    if (target.getAttribute("class") === "tile") {
        console.log("Tile detected!");
        target.setAttribute("style", "background-color: red");
    }

});



createTiles(100);




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


