<?php

include('../connect.php');

$startsy = $_GET['startsy'];
$term = $_GET['term'];

$query = mysql_query("SELECT count(1) as count FROM thesis WHERE start_sy='$startsy' AND start_term='$term'");

echo json_encode(mysql_fetch_assoc($query));