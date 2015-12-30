<?php
//This php code is to display faculty according to their department
  include("../connect.php");
  $dept_code = $_GET["dept"];
  
     $select_facultyByDept = mysql_query("SELECT CONCAT(lname, ', ' ,fname, ' ', mi) as faculty_name FROM faculty 
	                                      WHERE department_code = '$dept_code' ORDER BY lname");
 	 $list_facultyByDept = array();
      while($fetch_facultyByDept = mysql_fetch_assoc($select_facultyByDept)){
          $list_facultyByDept[] = $fetch_facultyByDept;
      }
      echo json_encode($list_facultyByDept);
   
?>