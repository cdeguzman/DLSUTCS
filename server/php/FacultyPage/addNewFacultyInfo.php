<?php
//This code is to add new faculty information
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
  
 $status = mysql_query("INSERT INTO faculty (id, lname, fname, mi, email, text_no, contact_no, title, secret_password, department_code, faculty_rank)
               VALUES ('$id','$lname','$fname','$mi','$email','$text_no','$contact_no','$title','$secret_password','$department_code','$faculty_rank')"); 
                
  echo $status;
?> 