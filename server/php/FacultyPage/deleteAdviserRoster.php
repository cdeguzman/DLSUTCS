<?php

include('../connect.php');

$facultyId = $_POST['id'];
mysql_query("DELETE FROM adviser_roster WHERE faculty_id=$facultyId");

echo mysql_affected_rows();