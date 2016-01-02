<?php
  //This php code is for adding new room record
  include("../connect.php");
  $id = $_POST["roomId"]; 
  $name = $_POST["roomname"];
  $room_no = $_POST["roomno"];
  $usable = $_POST["usable"];
  
  $status = mysql_query("UPDATE room SET name='$name', room_no='$room_no', usable='$usable'
               WHERE id = '$id'");
  echo $status;        
?> 