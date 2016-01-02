<?php
//This code displays all thesis title in a specific term.
  include("../connect.php");
   $start_sy = $_GET["start_sy"];
   $start_term = $_GET["start_term"];
   
    $select_thesis = mysql_query("SELECT primary_name, secondary_name FROM thesis 
	                                 WHERE start_sy='$start_sy' AND start_term = '$start_term'");
    $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
        $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
    	
?>