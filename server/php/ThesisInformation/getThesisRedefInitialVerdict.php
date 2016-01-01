<?php
//This code displays the initial redef verdict of the thesis group. This is also use to inform the students of their thesis verdict
//The redefense_nominated field is for the radio button 'Redefense'
  include("../connect.php");
     $thesis_id = $_GET["thesis_id"];   
        $select_verdict = mysql_query("SELECT id, redefense_initial_verdict_code, redefense_initial_verdict_string, redefense_nominated
		                               FROM report_defense_schedule
									   WHERE thesis_id = '$thesis_id'");
        $list_verdict = array();
        while($fetch_verdict = mysql_fetch_assoc($select_verdict)){
            $list_verdict[] = $fetch_verdict;
        }
        echo json_encode($list_verdict);
    	
?>