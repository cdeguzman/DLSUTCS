<?php

include('../connect.php');

$chatid = $_GET['chat_id'];
$retval = mysql_query("SELECT * FROM chat_member WHERE chat_id=$chatid");
$rows = array();
while ($row = mysql_fetch_assoc) $rows[] = $row;

echo json_encode($rows);