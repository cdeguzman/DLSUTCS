<?php
  include("../connect.php");
    
     $select_phase = mysql_query("SELECT code, name, description  FROM  phase");
 	 $list_phase = array();
      while($fetch_phase = mysql_fetch_assoc($select_phase)){
          $list_phase[] = $fetch_phase;
      }
      echo json_encode($list_phase);
   
?>