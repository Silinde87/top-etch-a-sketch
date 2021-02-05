//JS

let gridSize = 32;
const COLOR_BLACK = "black";

let grid = document.getElementById('grid');
let eraseButton = document.getElementById('reset-controller')

//This Draggable constructor creates the ability to rotate the rounded controllers
const sizeController = Draggable.create("#size-controller",{
    type: "rotation",
    bounds:{minRotation:90, maxRotation: 180},
    onDragEnd: () => console.log(sizeController[0].endRotation)
});
const colorController = Draggable.create("#color-controller",{
    type: "rotation",
    bounds:{minRotation:0, maxRotation: 90},
    onDragEnd: () => console.log(colorController[0].endRotation)
});

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
    if(elem.buttons == 1){
        if(elem.target.classList == 'square-grid'){
            let square = elem.target;    
            square.style.backgroundColor = color;
        }  
    }else{
        //Exit condition if mouse is not clicked.
        return;
    }
}

//this function turns all square-grid div to default 
//and rebuild the grid with gridSize size
function eraseGrid(){   
    grid.innerHTML = '';
    buildGrid(gridSize);
}

//Returns a random rgb color.
function getRandomRgb() {
    var num = Math.round(0xffffff * Math.random());
    var r = num >> 16;
    var g = num >> 8 & 255;
    var b = num & 255;
    return 'rgb(' + r + ', ' + g + ', ' + b + ')';
}

grid.addEventListener('mousedown', event =>{ 
    paintGridEvent = paintGrid(event, COLOR_BLACK);
    if(event.buttons == 1){        
        window.addEventListener('mouseover', (e) => {            
            paintGrid(e, COLOR_BLACK);
        });
    }
});

eraseButton.addEventListener('click', () =>{    
    eraseGrid();
});
