<?php
// This code will update the thesis verdict
  include("../connect.php");
   $regular_defense_final_verdict_code = $_POST["regular_defense_final_verdict_code"];
   $regular_defense_final_verdict_string = $_POST["regular_defense_final_verdict_string"];
   $id = $_GET["id"];
   $thesis_id = $_GET["thesis_id"];
    
   mysql_query("UPDATE report_defense_schedule SET 
                regular_defense_final_verdict_code='$regular_defense_final_verdict_code',
				regular_defense_final_verdict_string='$regular_defense_final_verdict_string'
				WHERE id='$id' AND thesis_id='$thesis_id'");
?>