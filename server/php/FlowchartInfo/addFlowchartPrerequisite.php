<?php

include("../connect.php");

$course_code = $_POST['course_code'];
$prerequisite_code = $_POST['prerequisite_code'];
$flowchart_version = $_POST['flowchart_version'];
$specialization_code = $_POST['specialization_code'];

mysql_query($q = "INSERT INTO flowchart_prerequisite(course_code, prerequisite_code, flowchart_version, specialization_code) 
  VALUES('$course_code', '$prerequisite_code', '$flowchart_version', '$specialization_code')");

echo json_encode($q);