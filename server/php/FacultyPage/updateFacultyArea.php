<?php
//This is php code is to modify the area and levelof specialization of the faculty
  include("../connect.php");
   $id = $_POST["id"];
   $faculty_id = $_POST["faculty_id"];
   $area_code = $_POST["area_code"];
   $area_level = $_POST["area_level"];
   
   $result = mysql_query("UPDATE faculty_area SET area_level='$area_level', area_code='$area_code'
                WHERE id='$id' AND faculty_id='$faculty_id'");
   echo json_encode($result);
?>