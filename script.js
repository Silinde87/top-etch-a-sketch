//JS

let gridSize = 16;
const COLOR_BLACK = "black";

let grid = document.getElementById('grid');

//This function builds the grid with the size as a parameter.
function buildGrid(size){
    
    let squareSize = document.getElementById('grid').clientWidth / size;
    //Creating the square and defining his size
    for(let i=1 ; i<=size*size;i++){ 
        let square = document.createElement('div')
        grid.appendChild(square);
        square.classList.add('square-grid');
        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";
    }
 
}

//this function paints the grid
function paintGrid(elem, color){
    let square = elem.target;    
    square.style.backgroundColor = color
}

function eraseGrid(){

}

console.log(grid.offsetHeight)
grid.addEventListener('mousemove', e=>{    
    if(e.target.classList == "square-grid"){
        paintGrid(e, COLOR_BLACK);
    }    
});
buildGrid(gridSize);