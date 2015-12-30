<?php
  include("../connect.php");
    
 	  $id = $_GET["id"];
  
      $select_info = mysql_query("SELECT id, primary_name, secondary_name, description, start_sy, end_sy, start_term, end_term, proposal_abstract, final_abstract  
                                    FROM  thesis
									WHERE id = '$id'");
      $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
      echo json_encode($list_info);
    	
?>