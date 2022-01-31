function createGrid() {
    function addContainer() {
        let container = document.createElement("div");
        container.classList.add("container");
        document.body.append(container);
    }
    function addGridSquare() {
        let container = document.querySelector(".container");
        let gridSquare = document.createElement("div");   
        gridSquare.classList.add("grid-square");
        container.append(gridSquare);
    }

    addContainer();
    for (let i = 1; i < 257; i++) {
        addGridSquare();
    }
}

createGrid();