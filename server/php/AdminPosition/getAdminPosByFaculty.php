<?php
  //This php code is for displaying the admin position list
  include("../connect.php");
    $id = $_GET["id"];
     $select_adminPos = mysql_query("SELECT ap.name, ap.description, CONCAT(f.lname, ', ' , f.fname, ' ', f.mi) as faculty_name
                                 	 FROM admin_position ap, faculty f
									 WHERE ap.faculty_id = f.id AND ap.id='$id'");
 	 $list_adminPos = array();
      while($fetch_adminPos = mysql_fetch_assoc($select_adminPos)){
          $list_adminPos[] = $fetch_adminPos;
      }
      echo json_encode($list_adminPos);
   
?>