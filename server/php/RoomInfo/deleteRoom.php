<?php
  //This php code is for deleting a room record
  include("../connect.php");
   
  $id = $_POST["id"];
  
  $removeRoom = "DELETE FROM room WHERE id = '$id'";
  $status = mysql_query($removeRoom);
  echo $status;
?> 