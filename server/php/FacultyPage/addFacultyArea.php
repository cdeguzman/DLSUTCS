<?php
//This is php code is to add area of specialization of the faculty
  include("../connect.php");
   $faculty_id = $_POST["faculty_id"];
   $area_code = $_POST["area_code"];
   $area_level = $_POST["area_level"];
   
   mysql_query("INSERT INTO faculty_area (faculty_id, area_code, area_level)
                VALUES ('$faculty_id', '$area_code', '$area_level')");
   echo mysql_insert_id();
?>