<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    
	$day = $_POST["day"];
	$start_time = $_POST["start_time"];
	
	mysql_query("INSERT INTO general_schedule (day, start_time)
	             VALUES ('$day', '$start_time')");

  echo json_encode(mysql_insert_id());
   
?>