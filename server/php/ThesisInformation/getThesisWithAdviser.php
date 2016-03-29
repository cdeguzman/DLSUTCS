<?php

include('../connect.php');

$id = $_GET['id'];
$query = mysql_query("SELECT t.id, t.primary_name, t.secondary_name, t.proposal_abstract, t.final_abstract, t.description, t.start_sy, t.end_sy, t.start_term, t.end_term, t.percent_completeness, ta.faculty_id
  FROM thesis t, thesis_adviser ta WHERE t.id=ta.thesis_id AND t.id='$id'");
$theses = array();

while($thesis = mysql_fetch_assoc($query)) $theses[] = $thesis;

echo json_encode($theses);