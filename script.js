//JS

let gridSize = 16;
const COLOR_BLACK = "black";
let COLOR_RANDOM = getRandomRgb();

let grid = document.getElementById('grid');
let eraseButton = document.getElementById('reset-controller')

buildGrid(gridSize);

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
        //Rounding square grid corners
        if(i==1){
            square.style.borderTopLeftRadius = "10px";
        }else if(i==size){
            square.style.borderTopRightRadius = "10px";
        }else if(i==size*size-size+1){
            square.style.borderBottomLeftRadius = "10px";
        }else if(i==size*size){
            square.style.borderBottomRightRadius = "10px";
        }
    }
 
}

//this function paints the grid
function paintGrid(elem, color){
    let square = elem.target;    
    square.style.backgroundColor = color;
}

function eraseGrid(){   
    grid.innerHTML = '';
    buildGrid(gridSize);
}

function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

grid.addEventListener('mouseover', e=>{    
    if(e.target.classList == "square-grid"){
        //paintGrid(e, COLOR_BLACK);
        paintGrid(e, getRandomRgb());
    }    
});
eraseButton.addEventListener('click', () =>{    
    eraseGrid();

});

