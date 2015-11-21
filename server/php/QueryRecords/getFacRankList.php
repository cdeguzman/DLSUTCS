<?php
  //This php code is for displaying the rank record
  include("../connect.php");
    
     $select_rank = mysql_query("SELECT id, code, name, description  FROM  rank");
 	 $list_rank = array();
      while($fetch_rank = mysql_fetch_assoc($select_rank)){
          $list_rank[] = $fetch_rank;
      }
      echo json_encode($list_rank);
   
?>