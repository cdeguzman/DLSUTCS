<?php
//This code is to update student information
  include("../connect.php");

  $id = $_POST["studentId"];
  $lname = $_POST["lastname"];
  $fname = $_POST["firstname"];
  $mi = $_POST["middlename"];
  $email = $_POST["email"];
  $text_no = $_POST["sms"];
  $contact_no = $_POST["contact"];
  $flowchart_version = $_POST["flowchart"];
  $specialization_code = $_POST["specialization"];
  $notify_thru_text = $_POST["notify"];
  $secret_password = $_POST["password"];
  $title = $_POST["title"];
  
  $status = mysql_query("INSERT INTO student (id, lname, fname, mi, email, text_no, contact_no, flowchart_version, specialization_code, notify_thru_text, secret_password, title)
               VALUES ('$id','$lname','$fname','$mi','$email','$text_no','$contact_no','$flowchart_version','$specialization_code','$notify_thru_text','$secret_password','$title'");
  echo $status;
?> 