<?php
//This code will display the related area of the faculty, student, and thesis title
  include("../connect.php");
    
     $select_subarea = mysql_query("SELECT code, name, description, general_area_code
                                  FROM  area");
 	 $list_subarea = array();
      while($fetch_subarea = mysql_fetch_assoc($select_subarea)){
          $list_subarea[] = $fetch_subarea;
      }
      echo json_encode($list_subarea);
   
?>