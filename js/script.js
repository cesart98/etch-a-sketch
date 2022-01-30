function createContainer() {
    let container = document.createElement("div");
    document.body.append(container);
    
    function styleContainer() {
        container.style.width = "640px";
        container.style.height = "640px";
        container.style.border = "4px solid black";
    }
    styleContainer();
}

createContainer();