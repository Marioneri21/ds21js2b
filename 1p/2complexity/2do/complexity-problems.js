//
// create one file by program
// implement a method, function, non-function solution
// solve each as requested
//
// COMPLEXITY

//1. Least common multiple
//   lcm(a,b)
// -> a integer
// -> b integer
// <- lcm 
<script>
var numero1=prompt();
var numero2=prompt(),i=2,mcm=1;
  while(i<numero1 || i<numero2 )
{
    if (numero1%i==0 || numero2%i==0)
    {
mcm=mcm*i;
    if(numero1%i==0)numero1=numero1/i;
    if(numero2%i==0)numero2=numero2/i;
} 
else i=i+1;
  }
  
console.log("MCM "+mcm);
</script>
---------------------------------------------------------------


//2. sieve of Eratosthenes
//   sieve(n)
// -> n integer
// <- the n first elements
<script>
var c = 100;
var j = 2;
var numerosPrimos = [];
for (; j < c; j++) {
  if (primo(j)) {
    numerosPrimos.push(j);
  }
}
console.log(numerosPrimos);
function primo(numero) {
  for (var i = 2; i < numero; i++) {
    if (numero % i === 0) {
      return false;
    }
  }
  return numero !== 1;
}
</script>

---------------------------------------------------------------
//3. random number
//   random(n)
// -> n integer
// <- one random number in [1-n]

<script>
    function aleatorio()
{
    var  n=Math.random()*10;
    return Math.floor (1-n);
}
var n=aleatorio();
console.log(n);
</script>
---------------------------------------------------------------

//4. random name
//   randomName()
// -> 
// <- one random name
// ie name371

<script>

    function aleatorio()
{
    var m=Math.random()*27;
    return m=Math.floor(1+m);
}
var name=aleatorio(),v=["mario","rene","carlos","andres","crsitiano","leo","ana","eric","gugo","ivan","juan","luz","sara","isis","zeus","penelope","martin","manuel","mariana","gabriel","lui","miguel","lucia","jorge","felipe","alberto","isabel"];
console.log(v[name]);

</script>