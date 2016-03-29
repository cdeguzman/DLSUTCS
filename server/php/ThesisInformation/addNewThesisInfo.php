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
   $faculty_id = $_POST["faculty_id"];
   
   mysql_query("INSERT INTO thesis (id, primary_name, secondary_name, proposal_abstract, final_abstract, description, start_sy, end_sy,
                                    start_term, end_term)
                VALUES ('$id','$primary_name','$secondary_name','$proposal_abstract','$final_abstract','$description',
                        '$start_sy','$end_sy','$start_term','$end_term')");
						
   mysql_query("INSERT_INTO thesis_adviser (thesis_id, faculty_id, start_sy, term) VALUES ('$id', '$faculty_id', '$start_sy', '$start_term')");
 	 
   echo json_encode(mysql_insert_id());
?>