<?php
// This code will display the list of thesis title/group
  include("../connect.php");
    $start_sy = $_GET["start_sy"];
	$end_sy = $_GET["end_sy"];
      $select_thesis = mysql_query("SELECT primary_name FROM  thesis
								    WHERE start_sy = '$start_sy' AND end_sy = '$end_sy'
									ORDER BY primary_name");
 	 $list_thesis = array();
      while($fetch_thesis = mysql_fetch_assoc($select_thesis)){
          $list_thesis[] = $fetch_thesis;
      }
      echo json_encode($list_thesis);
   
?>