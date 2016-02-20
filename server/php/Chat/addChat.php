<?php

include('../connect.php');

$userid = $_POST['user_id'];
$title = $_POST['title'];
mysql_query("INSERT INTO chat(title, user_id, total_users) VALUES('$title', $userid, 1)");

echo json_encode(mysql_insert_id());