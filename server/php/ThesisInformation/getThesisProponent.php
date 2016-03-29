<?php
//This code displays student by specialization that will be used to assign as thesis proponent
  include("../connect.php");
   $thesis_id = $_GET["thesis_id"];
   $start_sy = $_GET["start_sy"];
   $end_sy = $_GET["end_sy"];
   $term = $_GET["term"];
    
    $select_proponent = mysql_query("SELECT s.id as student_id, CONCAT(s.lname, ', ' ,s.fname, ' ', s.mi) as student_name, tp.id as proponent_id, s.specialization_code
      FROM student s, thesis_proponent tp 
      WHERE s.id = tp.student_id AND thesis_id = '$thesis_id' AND start_sy = '$start_sy' AND end_sy = '$end_sy' AND term = '$term' ORDER BY s.lname");
    $list_proponent = array();
    while($fetch_proponent = mysql_fetch_assoc($select_proponent)){
        $list_proponent[] = $fetch_proponent;
    }
    echo json_encode($list_proponent);
    	
?>