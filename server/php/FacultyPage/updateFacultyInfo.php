<?php
//This code is to update thesis information
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
  
  $update_award = mysql_query("UPDATE faculty SET lname='$lname', fname='$fname', mi='$mi', email='$email', text_no='$text_no',
                               contact_no='$contact_no', title='$title', secret_password='$secret_password', department_code='$department_code',
							   faculty_rank='$faculty_rank'
                               WHERE id = '$id'");  
?> 