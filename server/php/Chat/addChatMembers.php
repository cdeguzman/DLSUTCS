<?php

include('../connect.php');

$chatid = $_POST['chatid'];
$members = $_POST['members'];

foreach ($members as $member) {
  $userid = $member['userid'];
  $name = $member['name'];
  $query = "INSERT INTO chat_member(user_id, user_name, chat_id) VALUES($userid, '$name', $chatid)";
  mysql_query($query);
}

$total = count($members);
mysql_query("UPDATE chat SET total_users=$total WHERE id=$chatid");

echo 1;