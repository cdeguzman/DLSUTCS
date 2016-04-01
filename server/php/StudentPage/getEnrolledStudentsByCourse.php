<?php

include("../connect.php");

$startsy = $_GET['startsy'];
$endsy = $_GET['endsy'];
$term = $_GET['term'];

$query = mysql_query("SELECT s.id, CONCAT(s.lname, ', ', s.fname, ' ', s.mi) as studentname, te.course_code
  FROM student s, thesis_enrollment te 
  WHERE s.id=te.student_id AND te.start_sy='$startsy' AND te.end_sy='$endsy' AND te.term='$term'");

$students = array();
while ($student = mysql_fetch_assoc($query)) $students[] = $student;

echo json_encode($students);