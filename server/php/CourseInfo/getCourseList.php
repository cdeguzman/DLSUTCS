<?php
  //This php code is for displaying the course list
  include("../connect.php");
    
     $select_course = mysql_query("SELECT code FROM course ORDER BY code");
 	 $list_course = array();
      while($fetch_course = mysql_fetch_assoc($select_course)){
          $list_course[] = $fetch_course;
      }
      echo json_encode($list_course);
   
?>