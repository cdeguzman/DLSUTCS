<?php
  //This php code is for deleting a faculty record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeFaculty = "DELETE FROM faculty WHERE id = '$id'";
  mysql_query($removeFaculty);
  
?> 