function createContainer() {
    let container = document.createElement("div");
    document.body.append(container);

    function styleContainer() {
        container.classList.add("container");
    }
    styleContainer();
}

createContainer();