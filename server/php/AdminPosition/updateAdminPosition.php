<?php
  //This php code will update admin position
  include("../connect.php");
  $code = $_GET["code"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $faculty_id = $_POST["faculty_id"];
  
  mysql_query("UPDATE admin_position SET name='$name', description='$description', faculty_id='$faculty_id')
               WHERE code='$code'");
  
?>