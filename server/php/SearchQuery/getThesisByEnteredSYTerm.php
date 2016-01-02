<?php
//This code will search thesis start_sy, end_sy, start_term and end_term.
  include("../connect.php");
  $start_sy = $_GET["start_sy"];
  $end_sy = $_GET["end_sy"];
  $start_term = $_GET["start_term"];
  $end_term = $GET["end_term"];
  
   $thesis_id = $_GET["thesis_id"];
   
   $select_thesis = mysql_query("SELECT id, primary_name, secondary_name, description FROM thesis 
	                             WHERE start_term ='$start_term' AND end_sy='$end_sy' 
								 AND start_term='$start_term' AND end_term='$end_term'");
    $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
        $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
    	
?>