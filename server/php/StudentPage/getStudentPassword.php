<?php
//This code displays student password
  include("../connect.php");
    
   	  $id = $_GET["id"];
    
        $select_student = mysql_query("SELECT secret_password, secret_question, secret_answer FROM  student
  									   WHERE id = '$id'");
        $list_student = array();
        while($fetch_student = mysql_fetch_assoc($select_student)){
            $list_student[] = $fetch_student;
        }
        echo json_encode($list_student);

?>