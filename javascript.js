const container = document.querySelector(".container");
let squares = 4;

for(let i = 0; i < squares; i++){

    const row = document.createElement("div");
    for(let j = 0; j < squares; j++){

        const div = document.createElement("div");
        div.classList.add("square");
        // div.style.width = "100px";
        // div.style.height = "100px";
        // div.style.border = "thick solid blue";
        // div.style.background = "red";
        row.appendChild(div);
    }

    container.appendChild(row);
}
