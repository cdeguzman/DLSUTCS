<?php
// This code will add new admin position record (e.g. Dean, Vice Dean, Chairperson)
  include("../connect.php");
   $code = $_POST["adminId"];
   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   $faculty_id = $_POST["faculty"];
   
   $status = mysql_query("INSERT INTO admin_position (code, name, description, faculty_id)
                VALUES ('$code', '$name', '$description', '$faculty_id')");
 	
	echo $status; 
   
?>