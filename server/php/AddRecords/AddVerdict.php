<?php
  include("../connect.php");
   $code = $_POST["code"];
   $name = ucwords($_POST["name"]);   
   $description = $_POST["description"];
   
   mysql_query("INSERT INTO verdict (code, name, description)
                VALUES ('$code', '$name', '$description')");
 	 
   
?>