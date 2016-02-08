<?php
//This is php code is to add the current class schedule of a student on a specific SY and Term
  include("../connect.php");
  $start_sy = $_POST["start_sy"];
  $end_sy = $_POST["end_sy"];
  $term = $_POST["term"];
  $student_id = $_POST["student_id"];
  $schedule_code = '1'; //the value 1 is for class schedule, the value 2 is defense schedule 
  $day = $_POST["day"];
  $spec_date = $_POST["spec_date"];
  $start_time = $_POST["start_time"];
  $end_time = $_POST["end_time"];
  $preferred_thesis_schedule = $_POST["preferred_thesis_schedule"];
  $description = $_POST["description"];
  
  mysql_query("INSERT INTO student_schedule 
              (start_sy, end_sy, term, student_id, schedule_code, day, spec_date, start_time, end_time, preferred_thesis_schedule, description)
			  VALUES
			  ('$start_sy', '$end_sy', '$term', '$student_id', '$schedule_code', '$day', '$spec_date', '$start_time', 
			   '$end_time', '$preferred_thesis_schedule', '$description')");
  echo json_encode(mysql_insert_id());
?>