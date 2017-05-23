<?php

$colors = ["#009688","#f44336","#9c27b0","#219653","#219653","#ff2722","#8bc34a","#673ab7","#3f51b5","#009688","#ff9800"];

$myArr = [
		["name" => "Koo Vergara" , "email" => "kcvergara@straightarrow.com.ph", "theme" => $colors[rand(0,sizeof($colors) - 1)]],
		[ "name" => "Aerol Salcedo" , "email" => "apsalcedo@straightarrow.com.ph", "theme" => $colors[rand(0,sizeof($colors) - 1)]],
		["name" => "Roy Vincent Niepes" , "email" => "rlniepes@straightarrow.com.ph", "theme" => $colors[rand(0,sizeof($colors) - 1)]],
		[ "name" => "Fritz Daryl Roca" , "email" => "fproca@straightarrow.com.ph", "theme" => $colors[rand(0,sizeof($colors) - 1)]],
	];

$myJSON = json_encode($myArr);

echo $myJSON;

?>