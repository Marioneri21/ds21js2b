//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// DS in JS

//1. object
//   attach(n)
// -> n random name
// <- random name added




-----------------------------------------------------------
//2. set
//   attach(n)//wrap the method 'add'
// -> n random name
// <- random name added
// alone or proto

<script>
function aleatorio(){
    var inicio=1;
    var fin=100;
    var num=Math.random();
    num= inicio+num*(fin-inicio+1);
  num=Math.floor(num);
    return num;

}

class DS{
    constructor(){
        this.datos=new Array();
            }
    adjuntar(n){
        this.datos.push(n);
        
    }
    print(){
        console.log(this.datos)
    }
    }
let misDatos=new DS();
for (var i=0;i<10;i++)
    misDatos.adjuntar(aleatorio());
misDatos.print();
</script>
------------------------------------------------------------
//3. map
//   attach(n)//wrap the method 'set'
// -> n random name
// <- random name added
// alone or proto
	function Aleatorio(){
 
   let inicio=1;
   let fin=26; 
   let num = Math.random();
       num = inicio + num *(fin - inicio +1);
       num = Math.floor(num);
    
   return num=String.fromCharCode(num+64)+String.fromCharCode(num+64)+String.fromCharCode(num+64);
  }
     
  
  class DS{
    constructor(){
      this.datos={}
    }
    adjuntar(n){
      this.datos[n]=n;
    }
  	print(){
      
      console.log(this.datos);
    }
  }
  
	let misDatos=new DS()
  for (let i=0;i<10;i++)
    misDatos.adjuntar(Aleatorio())
  misDatos.print()
--------------------------------------------------------------

//4. array
//   attach(n)//wrap the method 'push'
// -> n random name
// <- random name added
// alone or proto

<script>
      function aleatorio()
{
    var letra;
    return letra=String.fromCharCode((Math.floor(1+ Math.random()*26))+64);
}
var o={namerandom:[]},la;
for (x=0;x<5;x++)
{
    la=aleatorio();
    o.namerandom.push(la);
    
}
console.log (o.namerandom.sort());
</script>
