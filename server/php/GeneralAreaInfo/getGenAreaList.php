<?php
  //This php code is for displaying the general area list
  include("../connect.php");
    
     $select_genArea = mysql_query("SELECT name FROM general_area ORDER BY name");
 	 $list_genArea = array();
      while($fetch_genArea = mysql_fetch_assoc($select_genArea)){
          $list_genArea[] = $fetch_genArea;
      }
      echo json_encode($list_genArea);
   
?>