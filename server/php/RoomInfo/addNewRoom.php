<?php
  //This php code is for adding new room record
  include("../connect.php");
   
  $name = $_POST["roomname"];
  $room_no = $_POST["roomno"];
  $usable = $_POST["usable"];
  
  $status = mysql_query("INSERT INTO room (name, room_no, usable)
               VALUES('$name', '$room_no', '$usable')");
  echo $status;  
?> 