<?php
  //This php code is for deleting an offered course
  include("../connect.php");
   
  $id = $_GET["id"];
  
  mysql_query("DELETE FROM course_offering WHERE id='$id'");
  
  echo json_encode(mysql_affected_rows());
?> 