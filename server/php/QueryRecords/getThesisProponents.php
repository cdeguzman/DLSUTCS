<?php
// This code will display the list of thesis title/group
  include("../connect.php");
  
      $select_proponent = mysql_query("SELECT s.lname, s.fname, s.mi FROM  student s, thesis_proponent tp
								    WHERE s.id = tp.student_id
									ORDER BY lname");
 	 $list_proponent = array();
      while($fetch_proponent = mysql_fetch_assoc($select_proponent)){
          $list_proponent[] = $fetch_proponent;
      }
      echo json_encode($list_proponent);
   
?>