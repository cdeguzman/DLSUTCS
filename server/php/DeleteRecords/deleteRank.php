<?php
  //This php code is for deleting the rank record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeRank = "DELETE FROM rank WHERE id = '$id'";
  mysql_query($removeRank);
  
?> 