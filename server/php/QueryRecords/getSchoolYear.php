<?php
  //This php code is for displaying the school year 
  include("../connect.php");
    
     $select_sy = mysql_query("SELECT DISTINCT CONCAT(start_sy, '-' ,end_sy) as SY FROM sy_term");
 	 $list_sy = array();
      while($fetch_sy = mysql_fetch_assoc($select_sy)){
          $list_sy[] = $fetch_sy;
      }
      echo json_encode($list_sy);
   
?>