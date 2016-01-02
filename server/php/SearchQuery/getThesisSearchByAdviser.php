<?php
//This code will display thesis ID using thesis adviser. This thesis ID will be used to search the specific thesis info.
  include("../connect.php");
   $faculty_id = $_GET["faculty_id"];
   $thesis_id = $_GET["thesis_id"];
   
   $select_thesis = mysql_query("SELECT thesis_id FROM thesis_adviser 
	                             WHERE thesis_id ='$thesis_id' AND faculty_id='$faculty_id'");
    $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
        $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
    	
?>