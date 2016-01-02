<?php
  $dbconnect = mysql_connect("127.0.0.1:3306", "root", "") or die("Unable to Connect: ". mysql_error());
  mysql_select_db("ccstcs", $dbconnect) or die("Unable to select mydbname: ". mysql_error());
  
?>