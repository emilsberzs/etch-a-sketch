
let unique_id = 1; //ID for background change
let width = 16; //initial width of grid
const outer_container = document.querySelector('#outer_container'); //Initialize body
const container = document.createElement('div'); //Create and initialize div for grid

container.id = 'container' //Add #id to container
outer_container.appendChild(container) //Append container to body

var mouse_down = 0; //Check if mouse button is pressed
document.body.onmousedown = function () { mouse_down = 1; console.log('down') } //make true when mouse clicked down
document.body.onmouseup = function () { mouse_down = 0; console.log('up') } //revert to false when released

document.querySelector('button').onclick = function () {
    //Remove all current grid squares
    while (container.hasChildNodes()) {
        container.removeChild(container.lastChild)
    }
    unique_id = 1 //Reset unique_id
    width = getWidth()
    makeGrid()
    drawGrid()
}

function getWidth() {
    let choice = 0;
    let is_valid = false;
    do {
        choice = prompt("Enter number (min 16-max 200) to choose size of grid: ")
        if (choice == null) //User clicked cancel

        choice = parseInt(choice);
        is_valid = choice >= 16 && choice <= 200 ; //Make sure enetered width is in acceptable range
        if (is_valid) {
            return choice;
        }
        else {
            ("Let's try again. Eneter number between 16 and 200")
        }
    } while (!is_valid)
}

function isMouseDown() {
    document.pre
    while (document.body.onmousedown) {
        console.log('mousedown')
        return true;
    }
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

function drawGrid(event) {
    if (document.getElementById(1)) {
        for (let i = 1; i <= width * width; i++) {
            document.getElementById(i).addEventListener('mouseover', function () {
                if (mouse_down == 1) {
                    document.getElementById(i).style.backgroundColor = 'black'
                }
            })
        }
    }
}


makeGrid()
outer_container.addEventListener('mousedown', drawGrid)

/*
TO DO:
1.Gradient change in color
2.Color picker
3.Sanitizing for new width
4.width slider perhaps?
5.Draw only when mousedown
*/