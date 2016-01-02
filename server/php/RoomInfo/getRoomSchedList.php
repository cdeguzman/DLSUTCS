<?php
  include("../connect.php");
    
     $select_info = mysql_query("SELECT *  FROM room_schedule");
 	 $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
     echo json_encode($list_info);
   
?>