<?php
  //This php code is for deleting an admin position
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeAdminPos = "DELETE FROM admin_position WHERE id = '$id'";
  mysql_query($removeAdminPos);
  
?> 