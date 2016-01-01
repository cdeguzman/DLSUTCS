<?php
//This code displays the outstanding defense verdict

  include("../connect.php");
     $thesis_id = $_GET["thesis_id"];   
        $select_verdict = mysql_query("SELECT id, outstanding_defense_verdict_code, outstanding_defense_verdict_string
		                               FROM report_defense_schedule
									   WHERE thesis_id = '$thesis_id'");
        $list_verdict = array();
        while($fetch_verdict = mysql_fetch_assoc($select_verdict)){
            $list_verdict[] = $fetch_verdict;
        }
        echo json_encode($list_verdict);
    	
?>