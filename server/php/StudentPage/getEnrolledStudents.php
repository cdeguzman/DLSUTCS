<?php
  //This php code is for displaying the list of students enrolled on a course on a current SY and term 
  include("../connect.php");
    $start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
	$term = $_GET["term"];
	$enrollment_code = $_GET["enrollment_code"];
	$section = $_GET["section"];
	$course_code = $_GET["course_code"];
	
     $select_enrolledStudents = mysql_query("SELECT CONCAT(s.lname, ', ', s.fname, ' ', s.mi) as studentName 
	                                         FROM student s, thesis_enrollment te
	                                         WHERE s.id = te.student_id AND start_sy='$start_sy' AND end_sy='$end_sy' 
											 AND term='$term' AND enrollment_code='$enrollment_code' AND section='$section'
											 AND course_code='$course_code'");
	 $list_enrolledStudents = array();
      while($fetch_enrolledStudents = mysql_fetch_assoc($select_enrolledStudents)){
          $list_enrolledStudents[] = $fetch_enrolledStudents;
      }
      echo json_encode($list_enrolledStudents);
   
?>