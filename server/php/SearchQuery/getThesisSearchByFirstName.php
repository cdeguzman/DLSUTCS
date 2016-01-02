<?php
//This code displays thesis ID using the first name of the student
  include("../connect.php");
   $lname = $_GET["lname"];
   $fname = $_GET["fname"];
       
   $select_proponent = mysql_query("SELECT tp.thesis_id FROM thesis_proponent tp, student s 
                                    WHERE s.fname='$fname' AND tp.student_id = s.id");
    $list_proponent = array();
    while($fetch_proponent = mysql_fetch_assoc($select_proponent)){
        $list_proponent[] = $fetch_proponent;
    }
    echo json_encode($list_proponent);
    	
?>