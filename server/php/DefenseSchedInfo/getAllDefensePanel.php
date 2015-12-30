<?php
  //This code displays the defense schedule of all panel
  include("../connect.php");
    
     $select_allDefensePanel = mysql_query("SELECT id, thesis_id, start_sy, end_sy, term, course_code, defense_code,
                                              lead_panel, faculty_id, verdict_code, start_time, end_time, start_date, end_date
											 FROM defense_panel");	 
 	                          
 	 $list_allDefensePanel = array();
      while($fetch_allDefensePanel = mysql_fetch_assoc($select_allDefensePanel)){
          $list_allDefensePanel[] = $fetch_allDefensePanel;
      }
      echo json_encode($list_allDefensePanel);
   
?>