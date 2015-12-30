<?php
  //This php code is for removing a defense
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeDefensePanel = "DELETE FROM defense_panel WHERE id = '$id'";
  mysql_query($removeDefensePanel);
  
?> 