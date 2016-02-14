<?php

include("../connect.php");

$username = $_GET["username"];
$password = $_GET["password"];

$result = mysql_query("SELECT id FROM student WHERE email='$username' AND secret_password='$password'");
$resp = 0;
while ($row = mysql_fetch_assoc($result)) {
    $resp = $row["id"];
    break;
}

echo $resp;

?>