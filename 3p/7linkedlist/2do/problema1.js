class Add{
constructor (){
this.array={};
this.inicio=0;
this.final=0;
};
prepend(dato) {
this.array[this.final]= dato;
this.final++;
};
};
const add= new Add();
add.prepend("R");
add.prepend(1);
add.prepend("A");
add.prepend(9);  
add.prepend("Y");
  
console.log(add);
 