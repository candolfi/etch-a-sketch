const container = document.querySelector(".container");
let rowSize = 12;

createGrid(rowSize);
document.querySelectorAll('.square').forEach(item => {
    item.addEventListener("mouseenter", event => {
        item.style.backgroundColor = 'blue';
    })
})



const button = document.querySelector('button');
button.addEventListener('click', () => {
    rowSize = prompt('Please enter the desired number of squares per row');
        while(rowSize > 100){
            rowSize = prompt('Too many squares, please enter a number less than or equal to 100');
        }
        container.innerHTML = "";
        createGrid(rowSize);
        document.querySelectorAll('.square').forEach(item => {
            item.addEventListener("mouseenter", event => {
                item.style.backgroundColor = 'blue';
            })
        })
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



