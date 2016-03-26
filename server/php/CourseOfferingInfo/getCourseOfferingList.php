<?php

include('../connect.php');

$start = $_GET['start_sy'];
$end = $_GET['end_sy'];
$term = $_GET['term'];

$query = mysql_query("SELECT * FROM course_offering WHERE start_sy='$start' AND end_sy='$end' AND term='$term'");
$courseOfferings = array();
while($courseOffering = mysql_fetch_assoc($query)) $courseOfferings[] = $courseOffering;

echo json_encode($courseOfferings);