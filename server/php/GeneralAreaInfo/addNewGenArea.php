<?php
  //This php code will add new general area
  include("../connect.php");
  
  $name = $_POST["name"];
  $description = $_POST["description"];
  
  mysql_query("INSERT INTO general_area (name, description)
               VALUES ('$name', '$description')");
  
?>