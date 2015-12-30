<?php
// This code will add new thesis group
  include("../connect.php");
   $id = $_POST["id"];
   $faculty_id = $_POST["faculty_id"];
   $thesis_id = $_POST["thesis_id"];   
   
   mysql_query("UPDATE thesis_adviser SET faculty_id='$faculty_id'
				WHERE id='$id' AND thesis_id='$thesis_id'");
?>