<?php
  //This php code is for deleting a thesis area
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeThesisArea = "DELETE FROM thesis_area WHERE id = '$id'";
  mysql_query($removeThesisArea);
  
?> 