<?php
  include("../connect.php");
   $code = $_POST["code"];
   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   $general_area_code = $_POST["general_area_code"];
   
   mysql_query("INSERT INTO area (code, name, description, general_area_code)
                VALUES ('$code', '$name', '$description', '$general_area_code')");
 	 
   
?>