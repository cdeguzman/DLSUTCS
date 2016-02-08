<?php
	include("../connect.php");

	$sy = $_GET['start_sy'];
	$term = $_GET['term'];

	$select_SY = mysql_query("SELECT * FROM sy_term WHERE start_sy='$sy' AND term='$term' ");

	$list_SY = array();

	while($fetch_SY = mysql_fetch_assoc($select_SY)){
		$list_SY[] = $fetch_SY;
	}

	echo json_encode($list_SY);
?>