<?php
  //This php code is to add new school year
  include("../connect.php");
    $id = $_GET["id"];
    $start_sy = $_POST["start_sy"];
	$end_sy = $_POST["end_sy"];
	$term = $_POST["term"];
	$start_date = $_POST["start_date"];
	$end_date = $_POST["end_date"];
	
	mysql_query("UPDATE sy_term SET 
	                 start_sy='$start_sy', 
				     end_sy='$end_sy', 
				     term='$term', 
				     start_date='$start_date', 
				     end_date='$end_date'
				 WHERE
				     id = '$id');
	             
				 
   
?>