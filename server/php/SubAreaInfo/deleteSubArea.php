<?php
  //This php code is for deleting an admin position
  include("../connect.php");
   
  $id = $_GET["id"];
  
  $removeSubArea = "DELETE FROM area WHERE code = '$id'";
  mysql_query($removeSubArea);
  
?> 