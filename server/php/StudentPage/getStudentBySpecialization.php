<?php
//This code displays student by specialization that will be used to assign as thesis proponent
  include("../connect.php");
    $specialization_code = $_GET["specialization_code"];
    
        $select_student = mysql_query("SELECT id, CONCAT(lname, ', ', fname, ' ', mi) as student_name FROM student
  									   WHERE specialization_code = '$specialization_code'");
        $list_student = array();
        while($fetch_student = mysql_fetch_assoc($select_student)){
            $list_student[] = $fetch_student;
        }
        echo json_encode($list_student);
    	
?>