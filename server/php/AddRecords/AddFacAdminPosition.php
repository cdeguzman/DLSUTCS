<?php
// This code will add new admin position record (e.g. Dean, Vice Dean, Chairperson)
  include("../connect.php");
   $code = $_POST["code"];
   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   $faculty_id = $_POST["faculty_id"];
   
   mysql_query("INSERT INTO department (code, name, description, faculty_id)
                VALUES ('$code', '$name', '$description', '$faculty_id')");
 	 
   
?>