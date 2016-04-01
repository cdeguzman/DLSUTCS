<?php
  //This php code is for displaying the list of students enrolled on a course on a current SY and term 
  include("../connect.php");
    $start_sy = $_POST["start_sy"];
	$end_sy = $_POST["end_sy"];
	$term = $_POST["term"];
	$enrollment_code = $_POST["enrollment_code"];
	$section = $_POST["section"];
	$course_code = $_POST["course_code"];
	$student_id = $_POST["student_id"];
	
    mysql_query("INSERT INTO thesis_enrollment (course_code, section, student_id, start_sy, end_sy, term, enrollment_code)
                 VALUES	('$course_code', '$section', '$student_id', '$start_sy', '$end_sy', '$term', '$enrollment_code')");

echo mysql_insert_id();
?>