//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
// may use code from previous exercises
//
// SORTING


//1. bubble - your implementation 
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted

    
<script>
  function numerosaleatorios()
  {
    let n=Math.random()*100;
    return Math.floor(1+n);
    
  }
var d=[];
for (x=0;x<4;x++)
{
    let nam=numerosaleatorios();
    d[x]=nam;
    
}
console.log("los numeros son"+"<br>"  + d);
    for (k=1; k < d.length; k++) {
        for (i=0; i<(d.length-k);i++){
            if (d[i]> d [i+1]){
                aux= d [i];
                d[i]=d[i+1];
                d[i+1]=aux;
            }
        }
    }
    console.log("ordenados"  + d);

</script>


    -----------------------------------------------------------
    //2. sort - use JS Array.sort implementation
//   sort(d)
// -> d an array of random numbers
// <- the random numbers sorted
// verify is sorted


<script>

    function numerosaleatorios()
{
    var n=Math.random()*9;
    return Math.floor(1+n);
}
var d=[];
for(x=0;x<4;x++)
{
    var na=numerosaleatorios();
    d[x]=na;
    
}
console.log("numeros aleatorios"+d+ "<br> numeros ordenados"+ d.sort());

</script>
--------------------------------------------------------
//3. bubble - your implementation 
//   sort(o)
// -> o an object containing random names: either an array of objects or an object of objects
// <- the random names sorted
// verify is sorted








------------------------------------------------------------
//4. sort - use JS Array.sort implementation
//   sort(o)
// -> o an object containing random names
// <- the random names sorted
// verify is sorted


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
