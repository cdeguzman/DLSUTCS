<?php
// This code will add new thesis group
  include("../connect.php");
   $id = $_GET["id"];
   $grade = $_POST["grade"];
    
   mysql_query("UPDATE thesis_enrollment SET grade='$grade'
				WHERE id='$id'");
?>