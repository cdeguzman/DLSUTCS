<?php
  //This php code is for displaying the selected sub area 
  include("../connect.php");
    $code=$_GET["code"];
     $select_subArea = mysql_query("SELECT a.name, a.description, ga.name as gen_area FROM area a, general_area ga
  	                                WHERE a.code='$code' AND a.general_area_code = ga.code");
 	 $list_subArea = array();
      while($fetch_subArea = mysql_fetch_assoc($select_subArea)){
          $list_subArea[] = $fetch_subArea;
      }
      echo json_encode($list_subArea);
   
?>