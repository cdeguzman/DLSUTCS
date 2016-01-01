<?php
// This code will update the thesis verdict
  include("../connect.php");
   $outstanding_defense_verdict_code = $_POST["$outstanding_defense_verdict_code"];
   $outstanding_defense_verdict_string = $_POST["$outstanding_defense_verdict_string"];
   $id = $_GET["id"];
   $thesis_id = $_GET["thesis_id"];
    
   mysql_query("UPDATE report_defense_schedule SET 
                outstanding_defense_verdict_code='$outstanding_defense_verdict_code',
				outstanding_defense_verdict_string='$outstanding_defense_verdict_string'
				WHERE id='$id' AND thesis_id='$thesis_id'");
?>