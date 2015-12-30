<?php
//This php code is to display the thesis adviser
  include("../connect.php");
  $faculty_id = $_POST["faculty_id"];
     
	 mysql_query("INSERT INTO adviser_roster (faculty_id) VALUES ('$faculty')");
   
?>