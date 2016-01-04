<?php
  //This php code will update admin position
  include("../connect.php");

  $id = $_POST["adminId"];
  $code = $_POST["adminCode"];
  $name = $_POST["name"];
  $description = $_POST["description"];
  $faculty_id = $_POST["faculty"];
  
  $status = mysql_query("UPDATE admin_position SET name='$name', description='$description', faculty_id='$faculty_id', code='$code' WHERE id='$id' ");
  echo $status;
?>