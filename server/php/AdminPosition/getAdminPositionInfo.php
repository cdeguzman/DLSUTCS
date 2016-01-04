<?php
  //This php code is for displaying the admin position list
  include("../connect.php");

  	$id = $_GET['id'];
    
     $select_adminPos = mysql_query("SELECT * FROM admin_position where id='$id'");
 	 $list_adminPos = array();
      while($fetch_adminPos = mysql_fetch_assoc($select_adminPos)){
          $list_adminPos[] = $fetch_adminPos;
      }
      echo json_encode($list_adminPos);
   
?>