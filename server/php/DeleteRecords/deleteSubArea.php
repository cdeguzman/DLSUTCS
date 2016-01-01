<?php
  //This php code is for deleting a sub-area record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeSubArea = "DELETE FROM area WHERE id = '$id'";
  mysql_query($removeSubArea);
  
?> 