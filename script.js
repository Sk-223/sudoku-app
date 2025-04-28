const board = document.getElementById('sudoku-board');
const penButton = document.getElementById('pen-mode');
const pencilButton = document.getElementById('pencil-mode');
const eraserButton = document.getElementById('eraser');
const undoButton = document.getElementById('undo');
const hintButton = document.getElementById('hint');

let mode = 'pen'; // 'pen' or 'pencil' or 'erase'
let moveHistory = [];

function createBoard() {
    const board = document.getElementById('sudoku-board');
    board.innerHTML = ''; // Clear any existing content
    
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            const cell = document.createElement('input');
            cell.type = 'text';
            cell.classList.add('cell');
            cell.maxLength = 1; // Ensure only one digit can be entered

            // Add special classes for thick borders
            if (col % 3 === 0) {
                cell.classList.add('left-border');
            }
            if (row % 3 === 0) {
                cell.classList.add('top-border');
            }

            // Add data attributes for position tracking
            cell.dataset.row = row;
            cell.dataset.col = col;

            board.appendChild(cell);
        }
    }
}


createBoard();

// Button functionality
penButton.addEventListener('click', () => {
  mode = 'pen';
});
pencilButton.addEventListener('click', () => {
  mode = 'pencil';
});
eraserButton.addEventListener('click', () => {
  mode = 'erase';
});
undoButton.addEventListener('click', undoLastMove);
hintButton.addEventListener('click', giveHint);

function undoLastMove() {
  console.log('Undo pressed');
}

function giveHint() {
  console.log('Hint pressed');
}
