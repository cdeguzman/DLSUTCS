<?php
  //This php code will adding new holiday
  include("../connect.php");
  
  $start_date = $_POST["start_date"];
  $end_date = $_POST["end_date"];
  $description = $_POST["description"];
  $start_sy = $_POST["start_sy"];
  $end_sy = $_POST["end_sy"];
  $term = $_POST["term"];
  
  $status = mysql_query("INSERT INTO holiday (start_date, end_date, description, start_sy, end_sy, term)
               VALUES ('$start_date', '$end_date', '$description', '$start_sy', '$end_sy', '$term')");
  echo $status;
?>