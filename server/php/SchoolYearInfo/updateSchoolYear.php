<?php
  //This php code is to add new school year
  include("../connect.php");

  	$start_sy = $_POST["syId"];
	$end_sy = $_POST["syId"]+1;

    $term1 = 1;
	$start_date1 = $_POST["fterm_from_add"];
	$end_date1 = $_POST["fterm_to_add"];

	$term2 = 2;
	$start_date2 = $_POST["sterm_from_add"];
	$end_date2 = $_POST["sterm_to_add"];


	$term3 = 3;
	$start_date3 = $_POST["tterm_from_add"];
	$end_date3 = $_POST["tterm_to_add"];


	$status1 = mysql_query("UPDATE sy_term SET start_date='$start_date1', end_date='$end_date1' WHERE term='$term1' AND start_sy='$start_sy' AND  end_sy='$end_sy'");

	$status2 =mysql_query("UPDATE sy_term SET start_date='$start_date2', end_date='$end_date2' WHERE term='$term2' AND start_sy='$start_sy' AND  end_sy='$end_sy'");

	$status3 = mysql_query("UPDATE sy_term SET start_date='$start_date3', end_date='$end_date3' WHERE term='$term3' AND start_sy='$start_sy' AND  end_sy='$end_sy'");
				 
   	echo ($status1+$status2+$status3);
	             
				 
   
?>