const container = document.querySelector(".container");
let squares = 4;

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
