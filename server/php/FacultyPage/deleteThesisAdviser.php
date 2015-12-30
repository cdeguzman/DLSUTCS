<?php
  //This php code is for removing an adviser from the thesis  
  include("../connect.php");
   $id = $_GET["id"];
   
   mysql_query("DELETE FROM thesis_adviser WHERE id='$id'");
				
?>