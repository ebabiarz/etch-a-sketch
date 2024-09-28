const container = document.querySelector("#Container");

createGrid(16);

changeResolution();

reset();

draw();


// function for Reset button
function reset() {
    const reset = document.querySelector("#Reset");

    reset.addEventListener("click", () => {
        const confirmReset = confirm("Reset canvas?");

        if (confirmReset === true) {
            const squares = document.querySelectorAll(".Row");

            squares.forEach((square) => {
                square.style.opacity = 0;
            });
        };
    });
};

// function for Change Resolution button
function changeResolution() {
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
        };
    });
};

//function that sets squares to change to black on mouseover
function draw() {
    const squares = document.querySelectorAll(".Row");

    squares.forEach((square) => {
        let opacity = 0.1;
        square.addEventListener("mouseover", () => {
            square.style.opacity = opacity;
            if (opacity < 1) {
                opacity += 0.1;
            };
        });
    });
};

// function that removes all children from #Container div
function removeChildren() {
    const parent = document.getElementById("Container");

    while (parent.firstChild) {
        parent.removeChild(parent.firstChild);
    };
};

// function that creates a grid
function createGrid(dim) {
    for (let i=0; i < dim; i++) {
        const column = document.createElement("div");
        column.classList.add("Column");
        for (let i=0; i < dim; i++) {
            const row = document.createElement("div");
            row.classList.add("Row");
            row.style.opacity = 0;
            row.style.backgroundColor = "black";
            column.appendChild(row);
        };
        container.appendChild(column);
    };
};
