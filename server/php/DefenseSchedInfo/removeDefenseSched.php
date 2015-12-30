<?php
  //This php code is for removing a defense
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeDefenseSched = "DELETE FROM defense_schedule WHERE id = '$id'";
  mysql_query($removeDefenseSched);
  
?> 