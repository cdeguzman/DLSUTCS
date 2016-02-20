<?php

include('../include.php');

$userid = $_POST['user_id'];
$chatid = $_POST['chat_id'];
$name = $_POST['name'];

mysql_query("INSERT INTO chat_member(user_id, user_name, chat_id) VALUES($userid, '$name', $chatid)");

echo mysql_insert_id();