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
  $title = $_POST["title"];
  $secret_password = $_POST["password"];
  $flowchart = $_POST["flowchart"];
  $specialization = $_POST["specialization"];
  $notify_thru_text = $_POST["notify"];

  $status = mysql_query("UPDATE student SET lname='$lname', fname='$fname', mi='$mi', email='$email', text_no='$text_no',
                               contact_no='$contact_no', title='$title', secret_password='$secret_password', flowchart_version='$flowchart',
                                specialization_code='$specialization', notify_thru_text='$notify_thru_text'
                               WHERE id = '$id'");
  echo $status; 
	
	
?> 