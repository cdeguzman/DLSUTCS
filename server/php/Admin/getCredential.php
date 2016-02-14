<?php

include("../connect.php");

$username = $_GET["username"];
$password = $_GET["password"];

$result = mysql_query("SELECT id FROM admin WHERE username='$username' AND password='$password'");
$resp = 0;
while ($row = mysql_fetch_assoc($result)) {
    $resp = $row["id"];
    break;
}

echo $resp;

?>