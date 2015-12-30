<?php
  //This php code is for deleting an offered course
  include("../connect.php");
   
  $id = $_GET["id"];
  
  $removeCourseOffering = "DELETE FROM course_offering WHERE id = '$id'";
  mysql_query($removeCourseOffering);
  
?> 