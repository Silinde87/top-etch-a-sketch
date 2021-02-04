//JS

let gridSize = 6;

//This function builds the grid with the size as a parameter.
function buildGrid(size){
    let grid = document.getElementById('grid');
    let squareSize = document.getElementById('grid').clientWidth / size -1;

    //Creating the square and defining his size
    for(let i=1 ; i<=size*size;i++){ 
        let square = document.createElement('div')
        grid.appendChild(square);
        square.classList.add('square-grid');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    }

    //Removing top border from grid
    grid = Array.from(grid.getElementsByClassName('square-grid'));
    for(let i=0 ; i<size ; i++){
        grid[i].style.borderTop = "none";
    }
    //Removing left border from grid
    for(let i=0 ; i<size*size;){
        grid[i].style.borderLeft = "none";
        i+=size;
    }    
}

//this function paints the grid
function paintGrid(){

}

function eraseGrid(){

}


buildGrid(gridSize);