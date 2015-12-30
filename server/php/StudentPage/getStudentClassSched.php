<?php
//This is php code is for the current class schedule of a student on a specific SY and Term
  include("../connect.php");
  $sid = $_GET["sid"];  
  $scode = $_GET["scode"]; // display will depend on the value of the schedule code
     $select_studentClassSched = mysql_query("SELECT ss.day, ss.start_time, ss.end_time, ss.description 
	                                          FROM student_schedule ss, student st, schedule sc
   	                                          WHERE ss.student_id = st.id AND
									          ss.schedule_code = sc.code 
											  AND st.id = '$sid' AND ss.schedule_code = '$scode' ORDER BY ss.day");
 	 $list_studentClassSched = array();
      while($fetch_studentClassSched = mysql_fetch_assoc($select_studentClassSched)){
          $list_studentClassSched[] = $fetch_studentClassSched;
      }
      echo json_encode($list_studentClassSched);
   
?>