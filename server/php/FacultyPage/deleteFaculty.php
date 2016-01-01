<?php
  //This php code is for deleting a faculty record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeFaculty = "DELETE FROM faculty WHERE id = '$id'";
  $status = mysql_query($removeFaculty);
  echo $status;
?> 