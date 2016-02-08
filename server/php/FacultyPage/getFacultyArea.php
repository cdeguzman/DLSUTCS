<?php
//This is php code is for the faculty_area specialization
  include("../connect.php");
  $fid = $_GET["fid"];  
     $select_facultyArea = mysql_query("SELECT f.id, a.name, fa.id as fa_id, a.code, fa.area_level as level FROM area a, faculty f, faculty_area fa
   	                                   WHERE a.code =  fa.area_code AND
									         f.id = fa.faculty_id 
											 AND f.id = '$fid' ORDER BY a.name");
 	 $list_facultyArea = array();
      while($fetch_facultyArea = mysql_fetch_assoc($select_facultyArea)){
          $list_facultyArea[] = $fetch_facultyArea;
      }
      echo json_encode($list_facultyArea);
   
?>