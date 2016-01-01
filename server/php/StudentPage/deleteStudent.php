<?php
  //This php code is for deleting a student record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeStudent = "DELETE FROM student WHERE id = '$id'";
  $status = mysql_query($removeStudent);
  echo $status;
?> 