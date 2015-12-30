<?php
  //This php code is for displaying the selected flowchart
  include("../connect.php");
    $version = $_GET["version"];
     $select_flowchart = mysql_query("SELECT version, specialization_code, name, description FROM flowchart
                                      WHERE version='$version'");
 	 $list_flowchart = array();
      while($fetch_flowchart = mysql_fetch_assoc($select_flowchart)){
          $list_flowchart[] = $fetch_flowchart;
      }
      echo json_encode($list_flowchart);
   
?>