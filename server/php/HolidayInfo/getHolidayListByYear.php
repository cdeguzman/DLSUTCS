<?php
  //This code will display the saved holiday
  include("../connect.php");

  $year = $_GET["year"];
  
	$select_holiday = mysql_query("SELECT * FROM holiday 
	                            WHERE start_sy='$year' OR end_sy='$year'");
								
 	 $list_holiday = array();
      while($fetch_holiday = mysql_fetch_assoc($select_holiday)){
          $list_holiday[] = $fetch_holiday;
      }
  echo json_encode($list_holiday);
   
?>