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
    function addHoverEffect() {
        function changeColor(event) {
            event.target.classList.add("hover-effect");
        }

        let squares = document.querySelectorAll(".grid-square");
        squares.forEach((square) => {
            square.addEventListener("mouseover", changeColor);
        })
    }
    
    addContainer();
    for (let i = 1; i < 257; i++) { // adds 256 grid squares to container
        addGridSquare();
    }
    addHoverEffect();
}

function createButton() {
    function addButton() {
        let button = document.createElement("button");
        button.classList.add("clear-button");
        document.body.prepend(button);
    }
    function addClearEffect() {
        function clearGrid() {
            let squares = document.querySelectorAll(".grid-square");
            squares.forEach((square) => {
                square.classList.remove("hover-effect");
            })
        }

        let button = document.querySelector("button");
        button.addEventListener("click", clearGrid);
    }
    addButton();
    addClearEffect();
}

createGrid();
createButton();