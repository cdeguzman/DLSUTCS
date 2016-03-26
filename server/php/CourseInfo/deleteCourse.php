<?php
  //This php code is for deleting a course 
  include("../connect.php");
   
  $id = $_GET["id"];
  
  $removeCourse = "DELETE FROM course WHERE id = '$id'";
  mysql_query($removeCourse);
  
  echo mysql_affected_rows();
?> 