<?php
  //This php code will update sub area
  include("../connect.php");
  
  $code = $_POST["areaId"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $general_area_code = $_POST["genarea"];
  
  $status = mysql_query("UPDATE area SET name='$name', description='$description', general_area_code='$general_area_code'
			   WHERE code='$code'");
  echo $status;    
  
?>