<?php
  $dbconnect = mysql_connect("localhost:3306", "gpena", "") or die("Unable to Connect: ". mysql_error());
  mysql_select_db("ccstcs", $dbconnect) or die("Unable to select mydbname: ". mysql_error());
  
?>