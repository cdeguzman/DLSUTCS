<?php
  //This php code is for displaying the general area list
  include("../connect.php");

  	$id = $_GET['id'];
    
     $select_genArea = mysql_query("SELECT * FROM general_area WHERE code='$id'");

 	 $list_genArea = array();
      while($fetch_genArea = mysql_fetch_assoc($select_genArea)){
          $list_genArea[] = $fetch_genArea;
      }
      echo json_encode($list_genArea);
   
?>