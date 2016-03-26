<?php

include("../connect.php");

$id = $_GET["id"];
mysql_query("DELETE FROM general_schedule WHERE id='$id'");

echo json_encode(mysql_affected_rows());
