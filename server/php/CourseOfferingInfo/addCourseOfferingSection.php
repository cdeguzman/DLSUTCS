<?php
  //This php code is for adding new section for selected course offering
  include("../connect.php");
   $start_sy = $_POST["start_sy"];
   $end_sy = $_POST["end_sy"];
   $term = $_POST["term"];
   $course_code = $_POST["course_code"];
   $section = $_POST["section"];
   
   mysql_query("INSERT INTO course_offering_section (start_sy, end_sy, term, course_code, section)
                VALUES ('$start_sy', '$end_sy', '$term', '$course_code', '$section')");

   echo mysql_insert_id();
?>