<?php
  //This code will display the saved holiday
  include("../connect.php");
  $start_sy = $_GET["start_sy"];
  $end_sy = $_GET["end_sy"];
  $term = $_GET["term"];
  
	$select_holiday = mysql_query("SELECT start_date, end_date, description FROM holiday 
	                            WHERE start_sy='$start_sy' AND end_sy='$end_sy' AND term='$term'");
								
 	 $list_holiday = array();
      while($fetch_holiday = mysql_fetch_assoc($select_holiday)){
          $list_holiday[] = $fetch_holiday;
      }
      echo json_encode($list_holiday);
   
?>