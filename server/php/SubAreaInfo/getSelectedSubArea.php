<?php
  //This php code is for displaying the selected sub area 
  include("../connect.php");
    $code=$_GET["id"];
    
     $select_subArea = mysql_query("SELECT * FROM area WHERE code='$code'");
 	 $list_subArea = array();
      while($fetch_subArea = mysql_fetch_assoc($select_subArea)){
          $list_subArea[] = $fetch_subArea;
      }
      echo json_encode($list_subArea);
   
?>