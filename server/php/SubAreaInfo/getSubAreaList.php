<?php
  //This php code is for displaying the sub area list
  include("../connect.php");
    
     $select_subArea = mysql_query("SELECT * FROM area ORDER BY name");
 	 $list_subArea = array();
      while($fetch_subArea = mysql_fetch_assoc($select_subArea)){
          $list_subArea[] = $fetch_subArea;
      }
      echo json_encode($list_subArea);
   
?>