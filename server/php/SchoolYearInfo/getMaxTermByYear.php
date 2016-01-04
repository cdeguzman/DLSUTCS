<?php
  include("../connect.php");
    
    $year = $_GET['year'];

     $select_SY = mysql_query("SELECT MAX(term) as max FROM sy_term WHERE start_sy='$year'");
	 $list_SY = array();
      while($fetch_SY = mysql_fetch_assoc($select_SY)){
          $list_SY[] = $fetch_SY;
      }
      echo json_encode($list_SY);
?>