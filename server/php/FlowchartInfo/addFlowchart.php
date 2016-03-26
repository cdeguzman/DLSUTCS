<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    $name = $_POST["name"];
	$description = $_POST["description"];
	$specialization_code = $_POST["specialization_code"];
	
	mysql_query("INSERT INTO flowchart (name, description, specialization_code)
	             VALUES ('$name', '$description', '$specialization_code')");
				 
   echo json_encode(mysql_insert_id());
?>