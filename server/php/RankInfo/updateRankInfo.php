<?php
  //This php code will add rank area
  include("../connect.php");
  $id = $_GET["id"];
  $code = $_POST["code"];
  $name = $_POST["name"];
  $ft_amount = $_POST["ft_amount"];
  $pt_amount = $_POST["pt_amount"];
  $description = $_POST["description"];
  
  mysql_query("UPDATE rank SET code='$code', name='$name', description='$description', ft_amount='$ft_amount', pt_amount='$pt_amount'
               WHERE id='$id'");
               
  
?>