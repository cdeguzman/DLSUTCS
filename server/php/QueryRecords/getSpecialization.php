<?php
  //This code displays the course information
  include("../connect.php");
    
     $select_specialization = mysql_query("SELECT name, code 
 	                          FROM specialization ORDER BY name");
 	 $list_specialization = array();
      while($fetch_specialization = mysql_fetch_assoc($select_specialization)){
          $list_specialization[] = $fetch_specialization;
      }
      echo json_encode($list_specialization);
   
?>