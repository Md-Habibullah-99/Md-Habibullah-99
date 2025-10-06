let a,b;
function output(){
  a = Number(document.querySelector(".input1").value);
  b = Number(document.querySelector(".input2").value);
  html = `The sum is : ${a+b}`;
  document.querySelector(".output").innerHTML = html;
};