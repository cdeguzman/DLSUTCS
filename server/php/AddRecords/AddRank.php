<?php
//This code is for adding new faculty rank 

  include("../connect.php");
   $code = $_POST["code"];
   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   
   mysql_query("INSERT INTO rank (code, name, description)
                VALUES ('$code', '$name', '$description')");
 	 
   
?>