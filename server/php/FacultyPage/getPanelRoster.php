<?php
//This php code is to display the thesis adviser
  include("../connect.php");
  $thesis_id = $_GET["thesis_id"];
     $select_thesisPanel = mysql_query("SELECT id, CONCAT(f.lname, ', ' ,f.fname, ' ', f.mi) as thesisPanel 
	                                      FROM faculty f, panel_roster pr
										  WHERE f.id = pr.faculty_id");
 	 $list_thesisPanel = array();
      while($fetch_thesisPanel = mysql_fetch_assoc($select_thesisPanel)){
          $list_thesisPanel[] = $fetch_thesisPanel;
      }
      echo json_encode($list_thesisPanel);
   
?>