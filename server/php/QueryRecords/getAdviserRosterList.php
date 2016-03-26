<?php

include('../connect.php');

$query = mysql_query("SELECT ar.id as adviser_roster_id, f.id as faculty_id, CONCAT(f.lname, ', ', f.fname, ' ', f.mi) as faculty_name, f.department_code, f.faculty_status_code
  FROM adviser_roster ar, faculty f 
  WHERE ar.faculty_id=f.id");

$advisers = array();

while($adviser = mysql_fetch_assoc($query)) $advisers[] = $adviser;

echo json_encode($advisers);