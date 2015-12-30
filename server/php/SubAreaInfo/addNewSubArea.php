<?php
  //This php code will add new sub area
  include("../connect.php");

  $name = $_POST["name"];
  $description = $_POST["description"];
  $general_area_code = $_POST["general_area_code"];
  
  mysql_query("INSERT INTO area (name, description, general_area_code)
               VALUES ('$name', '$description', '$general_area_code')");
  
?>