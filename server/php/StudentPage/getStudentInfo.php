<?php
//This code displays student information
  include("../connect.php");
    if($_GET["id"]!= NULL){
   	  $id = $_GET["id"];
    
        $select_student = mysql_query("SELECT id, lname, fname, mi, email, text_no, contact_no, secret_password, flowchart_version,
  	                                 specialization_code, student_status_code, notify_thru_email, notify_thru_text  
                                      FROM  student
  									WHERE id = '$id'");
        $list_student = array();
        while($fetch_student = mysql_fetch_assoc($select_student)){
            $list_student[] = $fetch_student;
        }
        echo json_encode($list_student);
    	}
?>