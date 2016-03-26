<?php

include('../connect.php');

$day = $_GET['day'];
$query = mysql_query("SELECT * FROM general_schedule WHERE day='$day'");
$timeList = array();
while($time = mysql_fetch_assoc($query)) $timeList[] = $time;

echo json_encode($timeList);