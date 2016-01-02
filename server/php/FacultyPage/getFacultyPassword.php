<?php
//This code displays faculty password
  include("../connect.php");
    
   	  $id = $_GET["id"];
    
        $select_faculty = mysql_query("SELECT secret_password, secret_question, secret_answer FROM  faculty
  									   WHERE id = '$id'");
        $list_faculty = array();
        while($fetch_faculty = mysql_fetch_assoc($select_faculty)){
            $list_faculty[] = $fetch_faculty;
        }
        echo json_encode($list_faculty);

?>