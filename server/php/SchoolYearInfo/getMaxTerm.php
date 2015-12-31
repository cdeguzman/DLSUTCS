<?php
  include("../connect.php");
    
     $select_SY = mysql_query("SELECT MAX(term) as max FROM sy_term");
	 $list_SY = array();
      while($fetch_SY = mysql_fetch_assoc($select_SY)){
          $list_SY[] = $fetch_SY;
      }
      echo json_encode($list_SY);
   
?>