<?php
//This code displays the initial verdict (for regular) of the thesis group
//The regular_defense_nominated field is for the radio button 'Regular Defense'
  include("../connect.php");
     $thesis_id = $_GET["thesis_id"];   
        $select_verdict = mysql_query("SELECT id, regular_defense_initial_verdict_code, regular_defense_initial_verdict_string, regular_defense_nominated
		                               FROM report_defense_schedule
									   WHERE thesis_id = '$thesis_id'");
        $list_verdict = array();
        while($fetch_verdict = mysql_fetch_assoc($select_verdict)){
            $list_verdict[] = $fetch_verdict;
        }
        echo json_encode($list_verdict);
    	
?>