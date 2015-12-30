<?php
  //This php code is for deleting a flowchart 
  include("../connect.php");
  $start_sy = $_GET["start_sy"];
  $end_sy = $_GET["end_sy"];
     
   mysql_query("DELETE FROM sy_term WHERE start_sy='$start_sy' AND end_sy='$end_sy'");
				
?>