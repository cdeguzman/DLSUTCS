<?php

include('../connect.php');

$facultyId = $_POST['faculty_id'];
mysql_query("INSERT INTO panel_roster(faculty_id) VALUES($facultyId)");

echo mysql_insert_id();