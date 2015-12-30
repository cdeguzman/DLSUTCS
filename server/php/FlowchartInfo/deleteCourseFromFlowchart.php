<?php
  //This php code is for deleting course from the selected flowchart
  include("../connect.php");
  $id = $_GET["id"];
     
   mysql_query("DELETE FROM flowchart_course WHERE id='$id');
				
?>