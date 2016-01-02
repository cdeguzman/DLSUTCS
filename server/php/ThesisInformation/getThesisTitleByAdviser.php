<?php
//This code displays thesis adviser for the thesis groups
  include("../connect.php");
   $faculty_id = $_GET["faculty_id"];
   $start_sy = $_GET["start_sy"];
   $term = $_GET["term"];
    
    $select_adviser = mysql_query("SELECT t.primary_name, t.secondary_name 
	                               FROM thesis t, thesis_adviser ta
                                   WHERE ta.faculty_id = '$faculty_id' AND ta.thesis_id = t.id 
								   AND ta.start_sy='$start_sy' AND ta.term='$term'");
    $list_adviser = array();
    while($fetch_adviser = mysql_fetch_assoc($select_adviser)){
        $list_adviser[] = $fetch_adviser;
    }
    echo json_encode($list_adviser);
    	
?>