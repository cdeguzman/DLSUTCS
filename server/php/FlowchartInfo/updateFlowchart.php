<?php
  //This php code is to update the selected flowchart
  include("../connect.php");
    $id = $_POST["id"];
    $name = $_POST["name"];
	$description = $_POST["description"];
	$specialization_code = $_POST["specialization_code"];
	
	mysql_query("UPDATE flowchart SET name='$name', description='$description', specialization_code='$specialization_code'
	             WHERE version='$id'");
	           
	echo json_encode(mysql_affected_rows());
   
?>