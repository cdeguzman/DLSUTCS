<?php
  //This code displays the defense sched of a specific panel 
  include("../connect.php");
    $faculty_id = $_GET["faculty_id"];
	$start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
	$term = $_GET["term"];
	
     $select_allDefensePanel = mysql_query("SELECT dp.id, t.primary_name, dp.course_code, 
                                              dp.lead_panel, CONCAT(f.lname, ', ', f.fname, ' ', mi) as facultyPanel,
											  dp.start_time, dp.end_time, dp.start_date, dp.end_date
											FROM defense_panel dp, faculty f, thesis t 
											WHERE faculty_id = '$faculty_id' AND dp.thesis_id=t.id
											AND dp.start_sy='$start_sy' AND dp.end_sy='$end_sy' AND dp.term='$term'");	 
 	                          
 	 $list_allDefensePanel = array();
      while($fetch_allDefensePanel = mysql_fetch_assoc($select_allDefensePanel)){
          $list_allDefensePanel[] = $fetch_allDefensePanel;
      }
      echo json_encode($list_allDefensePanel);
   
?>