<?php
//This code is to update student information
  include("../connect.php");
  $id = $_POST["id"];
  $lname = $_POST["lname"];
  $fname = $_POST["fname"];
  $mi = $_POST["mi"];
  $email = $_POST["email"];
  $text_no = $_POST["text_no"];
  $contact_no = $_POST["contact_no"];
  $flowchart_version = $_POST["flowchart_version"];
  $specialization_code = $_POST["specialization_code"];
  $student_status_code = $_POST["student_status_code"];
  $notify_thru_email = $_POST["notify_thru_email"];
  $notify_thru_text = $_POST["notify_thru_text"];
  
  mysql_query("INSERT INTO student (id, lname, fname, mi, email, text_no, contact_no, flowchart_version, specialization_code, student_status_code, notify_thru_email, notify_thru_text)
               VALUES ('$id', '$lname', '$fname', '$mi', '$email', '$text_no', '$contact_no', '$flowchart_version',
			           '$specialization_code', '$student_status_code', '$notify_thru_email', '$notify_thru_text'");
	
?> 