<script>
 let v = prompt ("ingresa un nuevo valor");
var numbers = [];
  for (let n = 0; n<100000; 
       n++)
  numbers [n] = n;
console.log(numbers);
numbers.splice(3,0,v);
console.log(numbers);
numbers.splice(4,1);
console.log(numbers);
</script>