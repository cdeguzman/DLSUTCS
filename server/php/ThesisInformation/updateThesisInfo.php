<?php
// This code will add new thesis group
  include("../connect.php");
   $id = $_POST["id"];
   $primary_name = $_POST["primary_name"];
   $secondary_name = $_POST["secondary_name"];
   $proposal_abstract = $_POST["proposal_abstract"];
   $final_abstract = $_POST["final_abstract"];
   $description = $_POST["description"];
   $start_sy = $_POST["start_sy"];
   $end_sy = $_POST["end_sy"];
   $start_term = $_POST["start_term"];
   $end_term = $_POST["end_term"];
    
   mysql_query("UPDATE thesis SET primary_name='$primary_name', secondary_name='$secondary_name', proposal_abstract='$proposal_abstract',
                       final_abstract='$final_abstract', description='$description', start_sy='$start_sy', end_sy='$end_sy',
                       start_term='$start_term', end_term='$end_term'
				WHERE id='$id'");

   echo json_encode(mysql_affected_rows());
?>