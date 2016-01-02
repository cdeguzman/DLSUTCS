<?php
//This code will search thesis by title on any term.
  include("../connect.php");
   $primary_name = $_GET["primary_name"];
   $start_sy = $_GET["start_sy"];
   $start_term = $_GET["start_term"];
   
   $select_thesis = mysql_query("SELECT id, primary_name, secondary_name, description FROM thesis 
	                             WHERE primary_name='$primary_name'");
    $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
        $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
    	
?>