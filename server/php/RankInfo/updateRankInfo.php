<?php
  //This php code will add rank area
  include("../connect.php");
  $id = $_POST["rankId"];
  $code = $_POST["rankCode"];
  $name = $_POST["name"];
  $ft_amount = $_POST["fulltimepay"];
  $pt_amount = $_POST["parttimepay"];
  $description = $_POST["description"];
  
  $status = mysql_query("UPDATE rank SET code='$code', name='$name', description='$description', ft_amount='$ft_amount', pt_amount='$pt_amount'
               WHERE id='$id'");
  echo $status;        
  
?>