<?php

include("../connect.php");

$id = $_GET["id"];
mysql_query("DELETE FROM flowchart_course WHERE id='$id'");

echo json_encode(mysql_insert_id());