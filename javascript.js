const container = document.querySelector(".container");

// Later this will become a "create grid" function with 
// squares as the parameter retrieved from the user

let squares = 20;

for(let i = 0; i < squares; i++){

    const row = document.createElement("div");
    row.classList.add("row");
    for(let j = 0; j < squares; j++){

        const div = document.createElement("div");
        div.classList.add("square");
        row.appendChild(div);
    }

    container.appendChild(row);
}
/////////////////////////////////////////////

document.querySelectorAll('.square').forEach(item => {
    item.addEventListener("mouseenter", event => {
        item.style.backgroundColor = 'blue';
    })
})
