<?php

function greaterFn($num){

	echo ($num);
	if ($num<10){
        echo( " is less than 10 <br>");
    }
    else if($num>10 && $num<21){
       echo( " is greater than 10 <br> ");
    }
    
    else if($num>20 && $num<30){
        echo( " is greater than 20 <br>");
    }
    else if($num>30){
        echo( " is greater than 30 <br>");
    }
  }

  greaterFn(40);
  greaterFn(21);
  greaterFn(12);
  greaterFn(8);
?>