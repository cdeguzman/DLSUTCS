<?php
//This php code is to display the thesis adviser
  include("../connect.php");
  $thesis_id = $_GET["thesis_id"];
     $select_thesisAdviser = mysql_query("SELECT id, CONCAT(f.lname, ', ' ,f.fname, ' ', f.mi) as thesisAdviser 
	                                      FROM faculty f, adviser_roster ar
										  WHERE f.id = ar.faculty_id");
 	 $list_thesisAdviser = array();
      while($fetch_thesisAdviser = mysql_fetch_assoc($select_thesisAdviser)){
          $list_thesisAdviser[] = $fetch_thesisAdviser;
      }
      echo json_encode($list_thesisAdviser);
   
?>