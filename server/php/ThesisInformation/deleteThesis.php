<?php
  //This php code is for deleting a thesis record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeThesis = "DELETE FROM thesis WHERE id = '$id'";
  mysql_query($removeThesis);
  
?> 