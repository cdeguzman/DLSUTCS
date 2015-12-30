<?php
  //This php code is for deleting an admin position
  include("../connect.php");
   
  $id = $_GET["id"];
  
  $removeGenArea = "DELETE FROM general_area WHERE code = '$id'";
  mysql_query($removeGenArea);
  
?> 