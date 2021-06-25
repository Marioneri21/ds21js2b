/**INSTRUCTIONS
 * 
 * create one file by program
 * implement a method, function, non-function solution
 * solve each as requested
 * may use code from previous exercises
 * 
 * PROBLEM 1
 * add(v)
 *
 * add an element at the end to the linked-list
 * @arg {type} v - value; may be of chars, numbers, u objects
 *
 * @example
 * add(3)
 * add element at the beginning 
 
 
 *
 * PROBLEM 2
 * size()
 *
 * returns the size of the linked-list
 * @returns {number} - size

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




 * @example
 * size()
 * Verify operation result
 *
 * PROBLEM 3
 * remove(p)
 *
 * remove element at position p
 * @arg {number} p - position
 * p must be a valid position between 0 and size()-1
 *
 * @example
 * remove(3)
 * Verify operation result
 * may use size
 *
 * @see {@link https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array}
 * @see {@link https://jsdoc.app}
 */
