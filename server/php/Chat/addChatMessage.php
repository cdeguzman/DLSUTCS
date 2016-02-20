<?php

include('../connect.php');

$userid = $_POST['user_id'];
$message = $_POST['message'];
$chatid = $_POST['chat_id'];

$selectcmid = "SELECT id FROM chat_member WHERE user_id=$userid AND chat_id=$chatid";
$select = 
mysql_query("INSERT INTO chat_message(message, chat_id, chat_member_id) VALUES('$message', $chatid, ($selectcmid))");

echo mysql_insert_id();

