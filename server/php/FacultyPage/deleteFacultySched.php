<?php
//This is php code is to delete schedule of the faculty
  include("../connect.php");
   $id = $_GET["id"];
   
   mysql_query("DELETE FROM faculty_schedule WHERE id='$id'");
   echo mysql_affected_rows();
?>