<?php
  //This php code is for deleting an admin position
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeSubArea = "DELETE FROM area WHERE code = '$id'";
  $status = mysql_query($removeSubArea);
  echo $status;
?> 