<?php
  //This php code is for deleting a room record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeRoomSched = "DELETE FROM room_schedule WHERE id = '$id'";
  mysql_query($removeRoomSchedule);
  
?> 