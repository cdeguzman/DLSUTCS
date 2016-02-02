<?php
//This is php code is to delete schedule of the student
  include("../connect.php");
   $id = $_GET["id"];
   
   $result = mysql_query("DELETE FROM student_schedule WHERE id='$id'");
   
   echo json_encode($result);
?>