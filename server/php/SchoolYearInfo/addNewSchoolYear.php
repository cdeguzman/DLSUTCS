<?php

include("../connect.php");

$start_sy = $_POST["start_sy"];
$end_sy = $_POST["end_sy"];
$start_date1 = $_POST["fterm_from_add"];
$end_date1 = $_POST["fterm_to_add"];
$start_date2 = $_POST["sterm_from_add"];
$end_date2 = $_POST["sterm_to_add"];
$start_date3 = $_POST["tterm_from_add"];
$end_date3 = $_POST["tterm_to_add"];

mysql_query($q="INSERT INTO sy_term(start_sy,end_sy,term,start_date,end_date) 
	VALUES('$start_sy','$end_sy',1,'$start_date1','$end_date1'),
	('$start_sy','$end_sy',2,'$start_date2','$end_date2'),
	('$start_sy','$end_sy',3,'$start_date3','$end_date3')");

echo json_encode($q);
