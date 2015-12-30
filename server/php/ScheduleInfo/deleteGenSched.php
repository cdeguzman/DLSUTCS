<?php
  //This php code is for deleting a flowchart 
  include("../connect.php");
  $id = $_GET["id"];
     
   mysql_query("DELETE FROM general_schedule WHERE id='$id');
				
?>