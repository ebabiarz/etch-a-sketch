const container = document.querySelector("#Container");

createGrid(16);

const resolution = document.querySelector("#Change-Resolution");

resolution.addEventListener("click", () => {
    const newResolution = prompt("Enter a number 1 to 100");

    if (newResolution > 0 && newResolution <= 100) {
        removeChildren();
        createGrid(newResolution);
        draw();
        alert("Resolution changed to " + newResolution + "x" + newResolution);
    } else {
        alert("Unsupported resolution. Please enter a number 1 to 100");
    }
});

draw();


//function that sets squares to change to black on mouseover
function draw() {
    const gridSquare = document.querySelectorAll(".Row");

    gridSquare.forEach((square) => {
        square.addEventListener("mouseover", () => {
            square.classList.add("Square-Black");
        });
    });
}

// function that removes all children from #Container div
function removeChildren() {
    const parent = document.getElementById("Container");

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    }
}

// function that creates a grid
function createGrid(dim) {
    for (let i=0; i < dim; i++) {
        const column = document.createElement("div");
        column.classList.add("Column");
        for (let i=0; i < dim; i++) {
            const row = document.createElement("div");
            row.classList.add("Row");
            column.appendChild(row);
        };
        container.appendChild(column);
    };
};
