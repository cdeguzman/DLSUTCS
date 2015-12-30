<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    $start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
	$term = $_GET["term"];
	$start_date = $_POST["start_date"];
	$end_date = $_POST["end_date"];
	
	mysql_query("UPDATE sy_term SET start_date='$start_date', end_date='$end_date'
	             WHERE start_sy='$start_sy' AND end_sy='$end_sy' AND term='$term'");
				 
   
?>