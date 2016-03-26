<?php
  //This php code is for displaying courses under a selected flowchart
  include("../connect.php");
    $flowchart_version = $_GET["flowchart_version"];
     $select_flowchart = mysql_query("SELECT * FROM flowchart_course
         	                          WHERE flowchart_version='$flowchart_version'");
 	 $list_flowchart = array();
      while($fetch_flowchart = mysql_fetch_assoc($select_flowchart)){
          $list_flowchart[] = $fetch_flowchart;
      }
      echo json_encode($list_flowchart);
   
?>