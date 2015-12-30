<?php
//This php code is to display the thesis adviser
  include("../connect.php");
  $thesis_id = $_GET["thesis_id"];
     $select_thesisAdviser = mysql_query("SELECT id, CONCAT(f.lname, ', ' ,f.fname, ' ', f.mi) as thesisAdviser 
	                                      FROM faculty f, thesis_adviser ta, thesis th
										  WHERE ta.thesis_id = '$thesis_id' AND f.id = ta.faculty_id 
										  AND ta.thesis_id = th.id");
 	 $list_thesisAdviser = array();
      while($fetch_thesisAdviser = mysql_fetch_assoc($select_thesisAdviser)){
          $list_thesisAdviser[] = $fetch_thesisAdviser;
      }
      echo json_encode($list_thesisAdviser);
   
?>