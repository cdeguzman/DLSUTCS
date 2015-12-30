<?php
  //This php code is for displaying the list of school year 
  include("../connect.php");
    
     $select_SY = mysql_query("SELECT DISTINCT (CONCAT(start_sy, ' - ', end_sy)) as schoolyear FROM sy_term");
	 $list_SY = array();
      while($fetch_SY = mysql_fetch_assoc($select_SY)){
          $list_SY[] = $fetch_SY;
      }
      echo json_encode($list_SY);
   
?>