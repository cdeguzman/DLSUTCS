<?php
  include("../connect.php");
    if($_GET["fid"]!= NULL){ 
 	  $fid = $_GET["fid"];
  
      $select_info = mysql_query("SELECT id, lname, fname, mi, email, text_no, contact_no, title, secret_password, department_code, title  
                                    FROM  faculty
									WHERE id = '$fid'");
      $list_info = array();
      while($fetch_info = mysql_fetch_assoc($select_info)){
          $list_info[] = $fetch_info;
      }
      echo json_encode($list_info);
    }	
?>