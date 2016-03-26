<?php

include('../connect.php');

$start_sy = $_GET['start_sy'];
$end_sy = $_GET['end_sy'];

$result = mysql_query("SELECT * FROM sy_term WHERE start_sy='$start_sy' AND end_sy='$end_sy'");
$schoolyears = array();
while($schoolyear = mysql_fetch_assoc($result)) $schoolyears[] = $schoolyear;

echo json_encode($schoolyears);