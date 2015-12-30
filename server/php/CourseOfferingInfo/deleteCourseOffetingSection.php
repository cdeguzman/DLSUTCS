<?php
  //This php code is for deleting the section for selected course offering
  include("../connect.php");
  $id = $_GET["id"];
     
   mysql_query("DELETE FROM course_offering_section WHERE id='$id');
				
?>