<?php
  //This php code is for deleting a flowchart 
  include("../connect.php");
  $start_sy = $_POST["start_sy"];
     
  $status = mysql_query("DELETE FROM sy_term WHERE start_sy='$start_sy'");

  echo $status;
?>