<?php
  include("../connect.php");
  
     $select_facultyByDept = mysql_query("SELECT * FROM department");
 	 $list_facultyByDept = array();
      while($fetch_facultyByDept = mysql_fetch_assoc($select_facultyByDept)){
          $list_facultyByDept[] = $fetch_facultyByDept;
      }
      echo json_encode($list_facultyByDept);
   
?>