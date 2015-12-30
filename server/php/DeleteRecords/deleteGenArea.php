<?php
  //This php code is for deleting a general area record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeGenArea = "DELETE FROM general_area WHERE id = '$id'";
  mysql_query($removeGenArea);
  
?> 