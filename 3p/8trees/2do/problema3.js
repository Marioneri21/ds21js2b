function Node(data, left, right) {
this.data = data;
this.left = left;
this.right = right;
this.show = show;
}
function show() {
return this.data;
}
function BST() {
this.root = null;
this.insert = insert;
this.inOrder = inOrder;
}
function insert(data) {
var n = new Node(data, null, null);
if (this.root == null) {
this.root = n;
}
else {
var current = this.root;
var parent;
while (true) {
parent = current;
if (data < current.data) {
current = current.left;
if (current == null) {
parent.left = n;
break;
}
}
else {
current = current.right;
if (current == null) {
parent.right = n;
break;
}
}
}
}
}
  function inOrder(node) {
if (!(node == null)) {
inOrder(node.left);
console.log((node.show() + " "));
inOrder(node.right);
}
}
 var nums = new BST();
nums.insert(27);
nums.insert(55);
nums.insert("M");
nums.insert(20);
nums.insert(2);
nums.insert("R");
nums.insert(19);
console.log("root: ");
console.log(inOrder(nums.root));
 
 