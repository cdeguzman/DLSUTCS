<?php
  //This php code is for deleting a position record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removePosition = "DELETE FROM admin_position WHERE id = '$id'";
  mysql_query($removePosition);
  
?> 