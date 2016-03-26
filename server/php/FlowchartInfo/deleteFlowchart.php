<?php
//This php code is for deleting a flowchart 
include("../connect.php");
$id = $_GET["id"];
mysql_query("DELETE FROM flowchart WHERE version='$id'");

echo json_encode(mysql_affected_rows());
?>