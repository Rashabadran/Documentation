function myFunction(){
    var x=document.getElementById("myForm");
    if(confirm("Confirm Reset?")){
        x.reset();
    }
}