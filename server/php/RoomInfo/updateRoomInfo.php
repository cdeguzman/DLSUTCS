<?php
  //This php code is for adding new room record
  include("../connect.php");
  $id = $_POST["id"]; 
  $name = $_POST["name"];
  $room_no = $_POST["room_no"];
  $description = $_POST["description"];
  $location = $_POST["location"];
  $usable = $_POST["usable"];
  
  mysql_query("UPDATE room SET name='$name', room_no='$room_no', description='$description', location='$location', usable='$usable'
               WHERE id = '$id');
               
?> 