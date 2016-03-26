<?php

include('../connect.php');

$query = mysql_query("SELECT pr.id as panel_roster_id, f.id as faculty_id, CONCAT(f.lname, ', ', f.fname, ' ', f.mi) as faculty_name, f.department_code, f.faculty_status_code
  FROM panel_roster pr, faculty f 
  WHERE pr.faculty_id=f.id");

$panels = array();

while($panel = mysql_fetch_assoc($query)) $panels[] = $panel;

echo json_encode($panels);