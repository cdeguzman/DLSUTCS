<?php
  //This php code is for displaying the flowchart list
  include("../connect.php");
    
     $select_flowchart = mysql_query("SELECT fw.name, fw.version, fw.specialization_code, sp.name as specialization FROM flowchart fw, specialization sp
	                                  WHERE fw.specialization_code = sp.code ORDER BY fw.name");
 	 $list_flowchart = array();
      while($fetch_flowchart = mysql_fetch_assoc($select_flowchart)){
          $list_flowchart[] = $fetch_flowchart;
      }
      echo json_encode($list_flowchart);
   
?>