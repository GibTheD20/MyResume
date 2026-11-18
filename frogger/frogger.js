const game = {
    frog: {x: 13, y: 19},
    lanes:[],
    score: 0,
    lives: 3,
    status: "ready"
};

const gameBoard = document.getElementById("game-board");

for( let i = 0; i < 20; i++){ //rows
    for( let j = 0; j < 20; j++){ //columns
        //position of one board square

const cell = document.createElement("div");
cell.classList.add("cell");
gameBoard.appendChild(cell);

    }
}
