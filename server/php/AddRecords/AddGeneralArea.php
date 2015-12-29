<?php
  include("../connect.php");

   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   
   $status = mysql_query("INSERT INTO general_area (name, description)
                VALUES ('$name', '$description')");
 	
 	echo $status; 
   
?>