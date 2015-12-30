<?php
  //This php code is for deleting a holiday record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeHoliday = "DELETE FROM holiday WHERE id = '$id'";
  mysql_query($removeHoliday);
  
?> 