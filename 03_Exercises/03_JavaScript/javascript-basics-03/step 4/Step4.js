function col(){
var x=document.getElementById("password").value;
var a=document.getElementById("password");
var y=document.getElementById("confirmation").value;
var b=document.getElementById("confirmation");
if(x!=y){
    a.style.border="3px solid red";
    b.style.border="3px solid red";
}
}