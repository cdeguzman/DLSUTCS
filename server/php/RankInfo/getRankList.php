<?php
  //This php code is for displaying the rank list
  include("../connect.php");
    
     $select_rank = mysql_query("SELECT name, code FROM rank ORDER BY name");
 	 $list_rank = array();
      while($fetch_rank = mysql_fetch_assoc($select_rank)){
          $list_rank[] = $fetch_rank;
      }
      echo json_encode($list_rank);
   
?>