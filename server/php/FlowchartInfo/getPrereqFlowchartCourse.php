<?php
  //This php code is for displaying the selected flowchart prerequisite
  include("../connect.php");
    $course_code = $_GET["course_code"];
	$flowchart_version = $_GET["flowchart_version"];
	
     $select_flowchartPrereq = mysql_query("SELECT * FROM flowchart_prerequisite
                                      WHERE course_code = '$course_code' AND flowchart_version='$flowchart_version'");
 	 $list_flowchartPrereq = array();
      while($fetch_flowchartPrereq = mysql_fetch_assoc($select_flowchartPrereq)){
          $list_flowchartPrereq[] = $fetch_flowchartPrereq;
      }
      echo json_encode($list_flowchartPrereq);
   
?>