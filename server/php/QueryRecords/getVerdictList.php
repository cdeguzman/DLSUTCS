<?php
//This code display the types of verdict (e.g. pass, conditional pass, redefense, fail)
  include("../connect.php");
    
     $select_verdict = mysql_query("SELECT code, name, description  FROM  verdict");
 	 $list_verdict = array();
      while($fetch_verdict = mysql_fetch_assoc($select_verdict)){
          $list_verdict[] = $fetch_verdict;
      }
      echo json_encode($list_verdict);
   
?>