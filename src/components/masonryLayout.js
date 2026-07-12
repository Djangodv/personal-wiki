export function rearrange(elementId) {

    const divElement = document.getElementById(elementId);
    const children = divElement.children;

    // Do nothing if divElement has only one child
    if (children.length <= 1) {
        return;
    }

    // Loops over each odd numbered child in `divElement` by starting at the first odd numbered child (every time a child gets deleted, the next one will be odd numbered)
    for (let i = 1; i <= Math.floor(children.length / 2); i++) {
        console.log(i);

        // Rearranges the odd numbered elements inside `divElement` by appending them to the end and removing them
        divElement.appendChild(children[i].cloneNode(true));
        divElement.removeChild(children[i]);
        
    }

    // Elements with an uneven amount of children, require different hackery in order to create a correct Masonry layout
    if ((children.length % 2) != 0) { // Check parity

        const median = Math.floor(children.length / 2);
        divElement.appendChild(children[median].cloneNode(true)); // Append middle element (i.e. last uneven child) to end of `divElement`

        // Replace median with empty invisible <div> element
        let newChild = document.createElement('div');
        newChild.style.visibility = "hidden";

        divElement.replaceChild(newChild, children[median]);

    }
}