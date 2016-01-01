<?php
//This code displays all the student name
  include("../connect.php");
        
        $select_student = mysql_query("SELECT id, CONCAT(lname, ', ' ,fname, ' ', mi) as studentName FROM student");
        $list_student = array();
        while($fetch_student = mysql_fetch_assoc($select_student)){
            $list_student[] = $fetch_student;
        }
        echo json_encode($list_student);
    	
?>