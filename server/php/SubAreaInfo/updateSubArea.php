<?php
  //This php code will update sub area
  include("../connect.php");
  
  $code = $_GET["code"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $general_area_code = $_POST["general_area_code"];
  
  mysql_query("UPDATE area SET name='$name', description='$description', general_area_code='$general_area_code'
			   WHERE code='$code'");
               
  
?>