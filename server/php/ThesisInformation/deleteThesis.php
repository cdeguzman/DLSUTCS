<?php
  //This php code is for deleting a thesis record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  mysql_query("DELETE FROM thesis WHERE id='$id'");
  
echo mysql_affected_rows();
?> 