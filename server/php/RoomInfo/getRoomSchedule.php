<?php
  //This code will display the schedule of a specific room
  include("../connect.php");
  $id = $_GET["id"];
	$start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
	
      $select_info = mysql_query("SELECT day, spec_date, start_time, end_time 
								  FROM room_sched
								  WHERE id='$id' AND start_sy='$start_sy' AND end_sy='$end_sy' ORDER BY day");
 	 $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
      echo json_encode($list_info);
   
?>