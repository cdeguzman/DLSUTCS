<?php
//This code displays student information
  include("../connect.php");
    if($_GET["id"]!= NULL){
   	  $id = $_GET["id"];
    
        $select_student = mysql_query("SELECT * 
                                      FROM  student
  									WHERE id = '$id'");
        $list_student = array();
        while($fetch_student = mysql_fetch_assoc($select_student)){
            $list_student[] = $fetch_student;
        }
        echo json_encode($list_student);
    	}
?>