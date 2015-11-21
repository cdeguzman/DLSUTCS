<?php
  //This code displays the general area of expertise of faculty, student, and thesis title
  include("../connect.php");
    
     $select_area = mysql_query("SELECT code, name, description  FROM  general_area ORDER BY name");
 	 $list_area = array();
      while($fetch_area = mysql_fetch_assoc($select_area)){
          $list_area[] = $fetch_area;
      }
      echo json_encode($list_area);
   
?>