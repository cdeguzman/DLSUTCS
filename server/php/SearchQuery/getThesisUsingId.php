<?php
//This code will search thesis using thesis id on any term.
  include("../connect.php");
   $thesis_id = $_GET["thesis_id"];
   
   $select_thesis = mysql_query("SELECT id, primary_name, secondary_name, description FROM thesis 
	                             WHERE id ='$thesis_id'");
    $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
        $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
    	
?>