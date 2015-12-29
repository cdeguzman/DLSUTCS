<?php
  include("../connect.php");

   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   $general_area_code = $_POST["genarea"];
   
   $status = mysql_query("INSERT INTO area (name, description, general_area_code)
                VALUES ('$name', '$description', '$general_area_code')");
 	echo $status;
   
?>