<?php
  //This php code is for deleting a student from thesis enrollment  
  include("../connect.php");
   $id = $_GET["id"];
   
   mysql_query("DELETE FROM thesis_enrollment WHERE id='$id'");

echo mysql_affected_rows();
?>