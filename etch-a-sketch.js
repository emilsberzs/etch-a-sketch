let unique_id = 1;
const width = 15


//Initialize body
const outer_container = document.querySelector('#outer_container')

//Create and initialize div for grid
const container = document.createElement('div')

//Add #id to container
container.id = 'container'

//Append container to body
outer_container.appendChild(container)

//Create 16x16 square of divs
for (let i = 0; i <= width; i++) {

    //Create row of horizontal divs
    const h_div = document.createElement('div');

    //Add class to each div
    h_div.classList.add('square', 'horizontal')

    //Append each div to container
    container.appendChild(h_div);

    //Create 15 verticals for each horizontal
    for (let i = 1; i <= width + 1; i++) {
        const v_div = document.createElement('div')

        //Add classes
        v_div.classList.add('square', 'vertical')

        //Add ID
        v_div.id = unique_id

        //Increment unique ID
        unique_id++

        //Append each stack to its horizontal
        h_div.appendChild(v_div)
    }

}

for (let i = 1; i <= width + 1 * width + 1; i++) {


    document.getElementById(i).addEventListener('mouseover', function () {
        document.getElementById(i).style.backgroundColor = 'black'
    })
}