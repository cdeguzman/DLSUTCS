<?php
// This code will display thesis title assigned to the student
  include("../connect.php");
  $sid = $_GET["sid"];
  $start_sy = $_GET["start_sy"];
  $end_sy = $_GET["end_sy"];
  $term = $_GET["term"];
    $select_thesis = mysql_query("SELECT t.primary_name, t.secondary_name FROM thesis t, thesis_proponent tp, student s
	                              WHERE t.id = tp.thesis_id AND s.id = tp.student_id AND 
								  s.id='$sid' AND tp.start_sy='$start_sy' AND tp.end_sy='$end_sy' AND tp.term='$term'");
 	  $list_thesis = array();
    while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
          $list_thesis[] = $fetch_thesis;
    }
    echo json_encode($list_thesis);
?>