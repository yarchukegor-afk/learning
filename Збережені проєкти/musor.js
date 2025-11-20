let calculator ={
read(){
  this.a = +prompt('Enter a','1');
  this.b = +prompt('Enter b','2');
},
  sum(){
  return this.a + this.b;
},
mul(){
  return this.a * this.b;
},
}
calculator.read();
alert(calculator.sum());
alert(calculator.mul());