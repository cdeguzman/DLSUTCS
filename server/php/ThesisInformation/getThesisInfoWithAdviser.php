<?php
//This code is to display the thesis general info with adviser
  include("../connect.php");
    
 	  $id = $_GET["id"];
  
      $select_info = mysql_query("SELECT t.id, t.primary_name, t.secondary_name, t.description, t.start_sy, t.end_sy, t.start_term,
                                     	 t.end_term, t.proposal_abstract, t.final_abstract, CONCAT(f.lname, ', ', f.fname, ' ', f.mi) as thesisAdviser  
                                  FROM  thesis t, faculty f, thesis_adviser ta
								  WHERE t.id = '$id' AND ta.faculty_id = f.id AND ta.thesis_id = t.id");
      $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
      echo json_encode($list_info);
    	
?>