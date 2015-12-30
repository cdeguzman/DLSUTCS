<?php
//This php code is to display all faculty regardless of their department
  include("../connect.php");
  
     $select_allFaculty = mysql_query("SELECT id, CONCAT(lname, ', ' ,fname, ' ', mi) as facultyName FROM faculty ORDER BY lname");
 	 $list_allFaculty = array();
      while($fetch_allFaculty = mysql_fetch_assoc($select_allFaculty)){
          $list_allFaculty[] = $fetch_allFaculty;
      }
      echo json_encode($list_allFaculty);
   
?>