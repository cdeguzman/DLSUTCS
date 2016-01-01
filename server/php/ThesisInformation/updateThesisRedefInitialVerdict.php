<?php
// This code will update the thesis verdict
  include("../connect.php");
   $redefense_initial_verdict_code = $_POST["redefense_initial_verdict_code"];
   $redefense_initial_verdict_string = $_POST["redefense_intial_verdict_string"];
   $id = $_GET["id"];
   $thesis_id = $_GET["thesis_id"];
    
   mysql_query("UPDATE report_defense_schedule SET 
                redefense_initial_verdict_code='$redefense_initial_verdict_code',
				redefense_initial_verdict_string='$redefense_initial_verdict_string'
				WHERE id='$id' AND thesis_id='$thesis_id'");
?>