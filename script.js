//JS

let gridSize = 32;
const COLOR_BLACK = "black";

let grid = document.getElementById('grid');
let eraseButton = document.getElementById('reset-controller')
let sizeControler = document.getElementById('size-controller');
let colorControler = document.getElementById('color-controller');

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
    console.log(elem.buttons);
    if(elem.buttons == 1){
        if(elem.target.classList == 'square-grid'){
            let square = elem.target;    
            square.style.backgroundColor = color;
        }  
    }
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

grid.addEventListener('mousedown', event =>{
    if(event.buttons == 1){
        window.addEventListener('mouseover', (e) => paintGrid(e, COLOR_BLACK));
    }
});

grid.addEventListener('mouseup', () =>{
    console.log("in");
    window.removeEventListener('mouseover',paintGrid);
})

eraseButton.addEventListener('click', () =>{    
    eraseGrid();
});

