<?php
  //This code displays the all defense schedule in a specific term  
  include("../connect.php");
   $start_sy = $_GET["start_sy"];
   $end_sy = $_GET["end_sy"];
   $term = $_GET["term"];
     $select_allDefenseSched = mysql_query("SELECT id, thesis_id, start_sy, end_sy, term, course_code, defense_code,
                                              spec_date, start_time, end_time, room_id, initial_verdict_code, final_verdict_code,
											  nominated, comment
											 FROM defense_schedule
											 WHERE start_sy='$start_sy' AND end_sy='$end_sy' AND term='$term'");	 
 	                          
 	 $list_allDefenseSched = array();
      while($fetch_allDefenseSched = mysql_fetch_assoc($select_allDefenseSched)){
          $list_allDefenseSched[] = $fetch_allDefenseSched;
      }
      echo json_encode($list_allDefenseSched);
   
?>