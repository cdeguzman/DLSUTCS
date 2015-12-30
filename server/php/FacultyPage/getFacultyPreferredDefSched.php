<?php
//This is php code is for the preferred defense schedule of a faculty on a specific SY and Term
  include("../connect.php");
  $fid = $_GET["fid"];  
  $scode = $_GET["scode"]; // display will depend on the value of the schedule code
     $select_facultyClassSched = mysql_query("SELECT fs.day, fs.start_time, fs.end_time, fs.description 
	                                          FROM faculty_schedule fs, faculty f, schedule s
   	                                          WHERE fs.faculty_id =  f.id AND
									          fs.schedule_code = s.code 
											  AND f.id = '$fid' AND fs.schedule_code = '$scode' ORDER BY fs.day");
 	 $list_facultyClassSched = array();
      while($fetch_facultyClassSched = mysql_fetch_assoc($select_facultyClassSched)){
          $list_facultyClassSched[] = $fetch_facultyClassSched;
      }
      echo json_encode($list_facultyClassSched);
   
?>