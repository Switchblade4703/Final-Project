class Leaf{
    constructor(data){
        this.data = data;
        this.left = null;
        this.right = null;
    }
}
var outputContainer = document.getElementById("output");

var tree = new Leaf("a");
tree.left = new Leaf("b");
tree.right = new Leaf("c");

tree.right.right = new Leaf("d");
tree.right.left = new Leaf("e");
tree.right.right.right = new Leaf("f");
tree.right.right.left = new Leaf("g");
tree.right.left.right = new Leaf("h");
tree.right.left.left = new Leaf("o");

tree.left.left = new Leaf("i");
tree.left.right = new Leaf("j");

tree.left.left.left = new Leaf("k");
tree.left.left.left.left = new Leaf("t");
tree.left.left.left.right = new Leaf("u");
tree.left.left.right = new Leaf("l");
tree.left.left.right.right = new Leaf("v");
tree.left.left.right.left = new Leaf("w");
tree.left.left.right.left.left = new Leaf("x")
tree.left.left.right.left.right = new Leaf("y")

tree.left.right.left = new Leaf("m");
tree.left.right.left.left = new Leaf("r");
tree.left.right.left.right = new Leaf("s");
tree.left.right.left.right.left = new Leaf("z");

tree.left.right.right = new Leaf("n");
tree.left.right.right.right = new Leaf("p");
tree.left.right.right.left = new Leaf("q");

function dfsSearchWithPath(node, target, path = []) {
    if (node === null) {
        return [];
    }

    // Add current node to the path
    path.push(node.data);

    // Check if the current node is the target
    if (node.data === target) {
        return path; // Return the path as the target has been found
    }

    // Recursively search in the left subtree
    let leftSearch = dfsSearchWithPath(node.left, target, path.slice());
    if (leftSearch.length > 0) {
        return leftSearch;
    }

    // Recursively search in the right subtree
    let rightSearch = dfsSearchWithPath(node.right, target, path.slice());
    if (rightSearch.length > 0) {
        return rightSearch;
    }

    // If not found, return an empty path
    return [];
}
path = [];

document.getElementById("search").addEventListener("click", () => {
    var item = document.getElementById('text').value;
    path = dfsSearchWithPath(tree, item);

    outputContainer.innerHTML = "your path to get to your selected letter is: " + path;
});