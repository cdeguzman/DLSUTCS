<?php
  //This php code is for displaying the school year 
  include("../connect.php");
     $id = $_POST["id"];
	 
     $select_term = mysql_query("SELECT DISTINCT term FROM sy_term");
 	 $list_term = array();
      while($fetch_term = mysql_fetch_assoc($select_term)){
          $list_term[] = $fetch_term;
      }
      echo json_encode($list_term);
   
?>