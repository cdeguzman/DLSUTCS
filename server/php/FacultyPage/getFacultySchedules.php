<?php

include('../connect.php');

$startsy = $_GET['startsy'];
$endsy = $_GET['endsy'];
$term = $_GET['term'];
$facultyid = $_GET['facultyid'];
$schedulecode  = $_GET['schedulecode'];

$query = mysql_query("SELECT * FROM faculty_schedule 
  WHERE start_sy='$startsy' AND end_sy='$endsy' AND term='$term' AND faculty_id='$facultyid' AND schedule_code='$schedulecode' 
  ORDER BY id");

$schedules = array();
while($schedule = mysql_fetch_assoc($query)) $schedules[] = $schedule;

echo json_encode($schedules);