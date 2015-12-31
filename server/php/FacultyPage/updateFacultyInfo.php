<?php
//This code is to update thesis information
  include("../connect.php");

  $id = $_POST["facultyId"];
  $lname = $_POST["lastname"];
  $fname = $_POST["firstname"];
  $mi = $_POST["middlename"];
  $email = $_POST["email"];
  $text_no = $_POST["sms"];
  $contact_no = $_POST["contact"];
  $title = $_POST["title"];
  $secret_password = $_POST["password"];
  $department_code = $_POST["department"];
  $faculty_rank = $_POST["currentrank"];
  
  $status = mysql_query("UPDATE faculty SET lname='$lname', fname='$fname', mi='$mi', email='$email', text_no='$text_no',
                               contact_no='$contact_no', title='$title', secret_password='$secret_password', department_code='$department_code',
							   faculty_rank='$faculty_rank'
                               WHERE id = '$id'");
  echo $status;  
?> 