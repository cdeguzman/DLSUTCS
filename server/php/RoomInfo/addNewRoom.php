<?php
  //This php code is for adding new room record
  include("../connect.php");
   
  $name = $_POST["name"];
  $room_no = $_POST["room_no"];
  $description = $_POST["description"];
  $location = $_POST["location"];
  $usable = $_POST["usable"];
  
  mysql_query("INSERT INTO room (name, room_no, description, location, usable)
               VALUES('$name', '$room_no', '$description', '$location', '$usable')");  
?> 