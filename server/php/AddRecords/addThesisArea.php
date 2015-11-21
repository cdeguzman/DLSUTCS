<?php
// This code will add related area to the thesis title/topic
  include("../connect.php");
   $thesis_id = $_POST["thesis_id"];
   $area_code = $_POST["area_code"];   
   $area_level = $_POST["area_level"];
   
   mysql_query("INSERT INTO thesis_area (thesis_id, area_code, area_level)
                VALUES ('$thesis_id', '$area_code', '$area_level')");
 	 
   
?>