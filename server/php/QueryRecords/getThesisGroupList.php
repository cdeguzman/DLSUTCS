<?php
// This code will display the thesis info of a specific thesis group
  include("../connect.php");
    $id = $_GET["id"];
      $select_thesisGroup = mysql_query("SELECT id, primary_name, secondary_name, description, CONCAT (start_sy, '-', end_sy) as sy, end_term, 
                                  proposal_abstract, final_abstract	  
                                  FROM  thesis
								  WHERE id = '$id'");
 	 $list_thesisGroup = array();
      while($fetch_thesisGroup = mysql_fetch_assoc($select_thesisGroup)){
          $list_thesisGroup[] = $fetch_thesisGroup;
      }
      echo json_encode($list_thesisGroup);
   
?>