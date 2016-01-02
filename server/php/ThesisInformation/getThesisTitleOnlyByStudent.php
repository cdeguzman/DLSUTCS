<?php
//This code displays thesis proponent to be added on the thesis group
  include("../connect.php");
   $thesis_id = $_GET["thesis_id"];
   $student_id = $_GET["student_id"];
   $start_sy = $_GET["start_sy"];
   $term = $_GET["term"];
    
    $select_proponent = mysql_query("SELECT t.primary_name, t.secondary_name FROM thesis t, thesis_proponent tp
								     WHERE tp.thesis_id = t.id AND tp.thesis_id = '$thesis_id' AND tp.student_id = '$student_id'
									 AND tp.start_sy='$start_sy' AND tp.term='$term'");
    $list_proponent = array();
    while($fetch_proponent = mysql_fetch_assoc($select_proponent)){
        $list_proponent[] = $fetch_proponent;
    }
    echo json_encode($list_proponent);
    	
?>