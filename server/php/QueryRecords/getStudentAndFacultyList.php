<?php

include('../connect.php');

$retval = mysql_query("SELECT id,CONCAT(fname,' ',lname) fullname,'Faculty' role FROM faculty
                       UNION
                       SELECT id,concat(fname,' ',lname),'Student' FROM student");
$rows = array();
while ($row = mysql_fetch_assoc($retval)) $rows[] = $row;

echo json_encode($rows);