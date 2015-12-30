<?php
  //This php code will add rank area
  include("../connect.php");
  $code = $_POST["code"];
  $name = $_POST["name"];
  $ft_amount = $_POST["ft_amount"];
  $pt_amount = $_POST["pt_amount"];
  $description = $_POST["description"];
  
  mysql_query("INSERT INTO rank (code, name, description, ft_amount, pt_amount)
               VALUES ('$code', '$name', '$description', '$ft_amount', '$pt_amount')");
  
?>