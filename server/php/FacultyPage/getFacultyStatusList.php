<?php

include('../connect.php');

$query = mysql_query("SELECT * FROM faculty_status");
$statusList = array();
while ($status = mysql_fetch_assoc($query)) $statusList[] = $status;

echo json_encode($statusList);
