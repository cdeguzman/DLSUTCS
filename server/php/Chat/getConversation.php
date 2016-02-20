<?php

include('../connect.php');

$chatid = $_GET['chat_id'];
$retval = mysql_query("SELECT msg.message, msg.insert_timestamp, mem.user_id, mem.user_name
                       FROM chat_message msg, chat_member mem
                       WHERE msg.chat_member_id=mem.id AND msg.chat_id=$chatid
                       ORDER BY msg.id");
$rows = array();
while ($row = mysql_fetch_assoc($retval)) $rows[] = $row;

echo json_encode($rows);