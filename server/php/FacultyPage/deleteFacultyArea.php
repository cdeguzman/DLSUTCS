<?php
//This is php code is to delete an area of specialization of the faculty
  include("../connect.php");
   $id = $_GET["id"];
   
   $result = mysql_query("DELETE FROM faculty_area WHERE id='$id'");
   
   echo json_encode($result);
?>