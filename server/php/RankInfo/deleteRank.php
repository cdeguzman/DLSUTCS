<?php
  //This php code is for deleting a rank 
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeRank = "DELETE FROM rank WHERE id = '$id'";
  mysql_query($removeRank);
  
?> 