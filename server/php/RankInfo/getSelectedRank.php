<?php
  //This php code is for displaying the selected rank 
  include("../connect.php");
  $code = $_GET["code"];  
     $select_rank = mysql_query("SELECT name, code, ft_amount, pt_amount, description FROM rank
								 WHERE code='$code'");
 	 $list_rank = array();
      while($fetch_rank = mysql_fetch_assoc($select_rank)){
          $list_rank[] = $fetch_rank;
      }
      echo json_encode($list_rank);
   
?>