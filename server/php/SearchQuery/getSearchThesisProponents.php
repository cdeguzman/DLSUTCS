<?php
//This code displays thesis proponents of the searched thesis
  include("../connect.php");
   $thesis_id = $_GET["thesis_id"];
     
   $select_proponent = mysql_query("SELECT CONCAT(s.lname, ', ' ,s.fname, ' ', s.mi) as student_name FROM student s, thesis_proponent tp
								     WHERE s.id = tp.student_id AND tp.thesis_id = '$thesis_id' ORDER BY s.lname");
    $list_proponent = array();
    while($fetch_proponent = mysql_fetch_assoc($select_proponent)){
        $list_proponent[] = $fetch_proponent;
    }
    echo json_encode($list_proponent);
    	
?>