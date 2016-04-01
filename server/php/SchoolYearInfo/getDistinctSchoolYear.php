<?php

include('../connect.php');

$result = mysql_query("SELECT CONCAT(start_sy,' - ',end_sy) as schoolyear FROM sy_term GROUP BY start_sy ORDER BY id DESC");
$schoolyears = array();
while($schoolyear = mysql_fetch_assoc($result)) $schoolyears[] = $schoolyear;

echo json_encode($schoolyears);