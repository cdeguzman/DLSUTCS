<?php
  //This php code is for deleting an admin position
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeGenArea = "DELETE FROM general_area WHERE code = '$id'";
  $status = mysql_query($removeGenArea);
  echo $status;
?> 