<?php
  $dbconnect = mysql_connect("localhost", "root", "") or die("Unable to Connect". mysql_error());
  mysql_select_db("ccstcs", $dbconnect);
  
?>