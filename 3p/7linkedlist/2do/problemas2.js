class  Add{
		constructor(){
    		this.arreglo={};
      	this.inicio=0;
      	this.final=0;
    
    };
  	insertar(dato){
    		this.arreglo[this.final]= dato;
      	this.final++;
    };
  
  	tamaño() {
    		return this.final - this.inicio;
    
    };

};
  
const add= new Add();
add.insertar(8);
add.insertar(5);
add.insertar("A");
add.insertar("C");

  
console.log(add);
console.log(add.tamaño());
