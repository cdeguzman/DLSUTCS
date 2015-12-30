<?php
//This code updates thesis area
  include("../connect.php");
    $id = $_POST["id"];
    $thesis_id = $_POST["thesis_id"];
	$area_code = $_POST["area_code"];
	$area_level = $_POST["area_level"]
    
    mysql_query("UPDATE thesis_area SET area_code='$area_code', area_level='$area_level'
	             WHERE thesis_id = '$thesis_id' AND id = '$id'");    
?>