<?php
  //This php code is for adding new room schedule
  include("../connect.php");
  
  $start_sy = $_POST["start_sy"];
  $end_sy = $_POST["end_sy"];
  $term = $_POST["term"];
  $room_id = $_POST["room_id"];
  $schedule_code = $_POST["schedule_code"];
  $day = $_POST["day"];
  $spec_date = $_POST["spec_date"];
  $start_time = $_POST["start_time"];
  $end_time = $_POST["end_time"];
  $description = $_POST["description"];
  
  mysql_query("INSERT INTO room_schedule (start_sy, end_sy, term, room_id, schedule_code, day, spec_date, start_time, end_time, description)
               VALUES('$start_sy', '$end_sy', '$term', '$room_id', '$schedule_code', '$day', '$spec_date', '$start_time', '$end_time', '$description')");  
?> 