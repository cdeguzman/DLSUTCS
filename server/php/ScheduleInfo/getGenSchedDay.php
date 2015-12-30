<?php
  //This php code is for displaying the day schedule list
  include("../connect.php");
    
     $select_genSched = mysql_query("SELECT DISTINCT day FROM general_schedule");
	 $list_genSched = array();
      while($fetch_genSched = mysql_fetch_assoc($select_genSched)){
          $list_genSched[] = $fetch_genSched;
      }
      echo json_encode($list_genSched);
   
?>