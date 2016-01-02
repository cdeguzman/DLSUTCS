<?php
//This code will get the history of thesis enrolled by a specific student. 
//This will be used in the thesis information on the student record window. 
  include("../connect.php");
    
 	  //$id = $_GET["id"];
      $sid = $_GET["sid"];
      $select_thesisHistory = mysql_query("SELECT CONCAT(start_sy, ' - ', end_sy) as schYear, term, course_code, grade 
										   FROM  thesis_enrollment
										   WHERE student_id = '$sid'");
      $list_thesisHistory = array();
      while($fetch_thesisHistory = mysql_fetch_assoc($select_thesisHistory)){
          $list_thesisHistory[] = $fetch_thesisHistory;
      }
      echo json_encode($list_thesisHistory);
    	
?>