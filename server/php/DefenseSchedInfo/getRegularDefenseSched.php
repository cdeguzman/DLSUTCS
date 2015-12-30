<?php
  //This code displays the regular defense schedule. This code can also be reused to display redef sched. 
  include("../connect.php");
    $defense_code = $_GET["defense_code"];
	$start_sy = $_GET["start_sy"];
    $end_sy = $_GET["end_sy"];
    $term = $_GET["term"];
	
     $select_regularDefenseSched = mysql_query("SELECT id, thesis_id, start_sy, end_sy, term, course_code, defense_code,
                                              spec_date, start_time, end_time, room_id, initial_verdict_code, final_verdict_code,
											  nominated, comment
											 FROM defense_schedule
											 WHERE defense_code='$defense_code' AND start_sy='$start_sy' AND end_sy='$end_sy' AND term='$term'");	 
 	                          
 	 $list_regularDefenseSched = array();
      while($fetch_regularDefenseSched = mysql_fetch_assoc($select_regularDefenseSched)){
          $list_regularDefenseSched[] = $fetch_regularDefenseSched;
      }
      echo json_encode($list_regularDefenseSched);
   
?>