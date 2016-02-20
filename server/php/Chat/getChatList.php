<?php

include('../connect.php');

$userid = $_GET['user_id'];
$retval = mysql_query("SELECT cm.chat_id, cm.user_id, cm.user_name, c.title, c.total_users 
                       FROM chat c, chat_member cm 
                       WHERE c.id=cm.chat_id AND cm.user_id=$userid");
$rows = array();
while($row = mysql_fetch_assoc($retval)) {
  $rows[] = $row;
}
echo json_encode($rows);
