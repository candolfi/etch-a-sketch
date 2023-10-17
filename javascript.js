const container = document.querySelector(".container");
const button = document.querySelector('button');
const rgb = document.querySelector('#rgb');

button.addEventListener('click', () => {
        let rowSize = getRowSize();
        let colour = 'black';
        container.innerHTML = "";
        createGrid(rowSize);
        hoverColour(colour);      
})

rgb.addEventListener('click', () => {
    container.innerHTML = "";
    createGrid(rowSize);
    randomHoverColour();   
})
///////////////////////////////////////////////////////

function createGrid(length){
    for(let i = 0; i < length; i++){

        const row = document.createElement("div");
        row.classList.add("row");
        for(let j = 0; j < length; j++){
    
            const div = document.createElement("div");
            div.classList.add("square");
            row.appendChild(div);
        }
    
        container.appendChild(row);
    }
}

function randomColour(){
    let maxColourVal = 16777215;
    let randomNum = Math.floor(Math.random() * maxColourVal).toString(16);
    let randColour = randomNum.padStart(6, 0);

    return `#${randColour.toUpperCase()}`
}

function hoverColour(colour){
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mouseenter", event => {
            item.style.backgroundColor = colour;
        })
    })
}

function randomHoverColour(){
    document.querySelectorAll('.square').forEach(item => {
        item.addEventListener("mouseenter", event => {
            item.style.backgroundColor = randomColour();
        })
    })
}

function getRowSize(){
    rowSize = prompt('Please enter the desired number of squares per row');
    while(rowSize > 100){
        rowSize = prompt('Too many squares, please enter a number less than or equal to 100');
    }
    return rowSize;
}


