<?php
//This code is to add new faculty information
  include("../connect.php");
  $id = $_POST["id"];
  $lname = $_POST["lname"];
  $fname = $_POST["fname"];
  $mi = $_POST["mi"];
  $email = $_POST["email"];
  $text_no = $_POST["text_no"];
  $contact_no = $_POST["contact_no"];
  $title = $_POST["title"];
  $secret_password = $_POST["secret_password"];
  $department_code = $_POST["department_code"];
  $faculty_rank = $_POST["faculty_rank"];
  
  mysql_query("INSERT INTO faculty (id, lname, fname, mi, email, text_no, contact_no, title, secret_password, department_code, faculty_rank)
               VALUES ('$id','$lname','$fname','$mi','$email','$text_no','$contact_no','$title','$secret_password','$department_code','$faculty_rank')");  

?> 