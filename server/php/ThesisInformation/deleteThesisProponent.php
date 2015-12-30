<?php
  //This php code is for deleting a thesis record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeThesisProponent = "DELETE FROM thesis_proponent WHERE id = '$id'";
  mysql_query($removeThesisProponent);
  
?> 