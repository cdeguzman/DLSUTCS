<?php
  //This php code will add new admin position
  include("../connect.php");
  
  $code = $_POST["code"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $faculty_id = $_POST["faculty_id"];
  
  mysql_query("INSERT INTO admin_position (code, name, description, faculty_id)
               VALUES ('$code', '$name', '$description', '$faculty_id')");
  
?>