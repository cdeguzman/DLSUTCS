<?php
  //This php code will add rank area
  include("../connect.php");
  $code = $_POST["rankCode"];
  $name = $_POST["name"];
  $ft_amount = $_POST["fulltimepay"];
  $pt_amount = $_POST["parttimepay"];
  $description = $_POST["description"];
  
  $status = mysql_query("INSERT INTO rank (code, name, description, ft_amount, pt_amount)
               VALUES ('$code', '$name', '$description', '$ft_amount', '$pt_amount')");
  echo $status;
?>