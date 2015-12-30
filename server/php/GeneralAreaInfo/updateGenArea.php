<?php
  //This php code will update general area
  include("../connect.php");
  $code = $_GET["code"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  
  mysql_query("UPDATE general_area SET name='$name', description='$description'
               WHERE code='$code'");
               
  
?>