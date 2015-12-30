<?php
//This code displays thesis area
  include("../connect.php");
    $thesis_id = $_GET["thesis_id"];
    
        $select_thesisArea = mysql_query("SELECT a.name FROM area a, thesis_area ta
                                       WHERE a.code = ta.area_code AND ta.thesis_id = '$thesis_id'
  									   ORDER BY a.name");
        $list_thesisArea = array();
        while($fetch_thesisArea = mysql_fetch_assoc($select_thesisArea)){
            $list_thesisArea[] = $fetch_thesisArea;
        }
        echo json_encode($list_thesisArea);
    	
?>