<?php
  //This php code is for displaying the schedule of every term per school year 
  include("../connect.php");
    $start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
	
     $select_SY = mysql_query("SELECT id, term, start_date, end_date FROM sy_term
	                           WHERE start_sy='$start_sy' AND end_sy='$end_sy' ORDER BY  start_sy, term DESC");
	 $list_SY = array();
      while($fetch_SY = mysql_fetch_assoc($select_SY)){
          $list_SY[] = $fetch_SY;
      }
      echo json_encode($list_SY);
   
?>