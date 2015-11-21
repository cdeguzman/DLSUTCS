<?php
  //This php code is for displaying the rank record
  include("../connect.php");
    
     $select_adminPos = mysql_query("SELECT id, code, name, description
                                	 FROM admin_position");
 	 $list_adminPos = array();
      while($fetch_adminPos = mysql_fetch_assoc($select_adminPos)){
          $list_adminPos[] = $fetch_adminPos;
      }
      echo json_encode($list_adminPos);
   
?>