<?php
//This is php code is to delete schedule of the faculty
  include("../connect.php");
   $id = $_GET["id"];
   
   $result = mysql_query($q = "DELETE FROM faculty_schedule WHERE id='$id'");
   echo json_encode($q);
?>