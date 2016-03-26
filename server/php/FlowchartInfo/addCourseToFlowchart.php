<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    $course_code = $_POST["course_code"];
	$flowchart_version = $_POST["flowchart_version"];
	$specialization_code = $_POST["specialization_code"];
	
	mysql_query($q = "INSERT INTO flowchart_course (course_code, flowchart_version, specialization_code)
	             VALUES ('$course_code', '$flowchart_version', '$specialization_code')");

  echo json_encode($q);
?>