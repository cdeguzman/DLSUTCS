<?php
//This code will add new thesis proponent
  include("../connect.php");
  $thesis_id = $_POST["thesis_id"];
  $student_id = $_POST["student_id"];
  $start_sy = $_POST["start_sy"];
  $end_sy = $_POST["end_sy"];
  $term = $_POST["term"];
  
  mysql_query("INSERT INTO thesis_proponent (thesis_id, student_id, start_sy, end_sy, term)
               VALUES ('$thesis_id', '$student_id', '$start_sy', '$end_sy', '$term')");
	
?> 