<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    $start_sy = $_POST["start_sy"];
	$end_sy = $_POST["end_sy"];
	$term = $_POST["term"];
	$start_date = $_POST["start_date"];
	$end_date = $_POST["end_date"];
	
	mysql_query("INSERT INTO sy_term (start_sy, end_sy, term, start_date, end_date)
	             VALUES ('$start_sy', '$end_sy', '$term', '$start_date', '$end_date')");
				 
   
?>