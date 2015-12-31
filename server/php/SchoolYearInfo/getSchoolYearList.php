<?php
  //This php code is for displaying the list of school year 
  include("../connect.php");
    
     $select_SY = mysql_query("SELECT * FROM sy_term  ORDER BY term DESC, start_sy DESC");
	 $list_SY = array();
      while($fetch_SY = mysql_fetch_assoc($select_SY)){
          $list_SY[] = $fetch_SY;
      }
      echo json_encode($list_SY);
   
?>