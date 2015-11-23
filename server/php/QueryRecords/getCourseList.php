<?php
  //This code displays the course information
  include("../connect.php");
    
     $select_course = mysql_query("SELECT id, code, name, description, unit 
 	                             FROM course");
 	 $list_course = array();
      while($fetch_course = mysql_fetch_assoc($select_course)){
          $list_course[] = $fetch_course;
      }
      echo json_encode($list_course);
   
?>