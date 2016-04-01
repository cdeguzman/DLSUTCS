<?php
// This code will add new thesis group
  include("../connect.php");
   $faculty_id = $_POST["faculty_id"];
   $thesis_id = $_POST["thesis_id"];   
   
   mysql_query($q="UPDATE thesis_adviser SET faculty_id='$faculty_id'
				WHERE thesis_id='$thesis_id'");
   echo json_encode($q);
?>