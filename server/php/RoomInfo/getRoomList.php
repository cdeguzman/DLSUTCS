<?php
  include("../connect.php");
    
      $select_info = mysql_query("SELECT id, room_no, name 
								  FROM room
								  ORDER BY room_no");
 	 $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
      echo json_encode($list_info);
   
?>