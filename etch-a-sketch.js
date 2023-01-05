
let unique_id = 1; //ID for background change
let width = 16; //initial width of grid
const outer_container = document.querySelector('#outer_container'); //Initialize body
const container = document.createElement('div'); //Create and initialize div for grid

container.id = 'container' //Add #id to container
outer_container.appendChild(container) //Append container to body

document.querySelector('button').onclick = function () { 
    //Remove all current grid squares
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
    unique_id = 1 //Reset unique_id
    width = prompt("Enter width for your grid: ")//Prompt for the new width
    makeGrid()
    drawGrid()
}

function makeGrid() {
    //Create horizontal divs
    for (let i = 0; i < width; i++) {
        const h_div = document.createElement('div'); //Create row of horizontal div
        h_div.classList.add('square', 'horizontal') //Add class to each div
        container.appendChild(h_div); //Append each div to container

        //Create verticals for each horizontal
        for (let i = 0; i < width; i++) {
            const v_div = document.createElement('div')
            v_div.classList.add('square', 'vertical')
            v_div.id = unique_id //Add ID to reference for color change
            v_div.style.width = 800 / width + 'px' //Make individual square size adaptable, no matter how many squares, the board stays same size.
            v_div.style.height = 800 / width + 'px' 
            unique_id++ //Increment unique ID for next square
            h_div.appendChild(v_div) //Append each stack to its horizontal
        }
    }
}

function drawGrid() {
    if (document.getElementById(1)) {
        for (let i = 1; i <= width * width; i++) {
            document.getElementById(i).addEventListener('mouseover', function () {
                document.getElementById(i).style.backgroundColor = 'black'
            })
        }
    }
}

makeGrid()
drawGrid()


/*
TO DO:
1.Gradient change in colot
2.Color picker
3.Sanitizing for new width
4.width slider perhaps?
*/