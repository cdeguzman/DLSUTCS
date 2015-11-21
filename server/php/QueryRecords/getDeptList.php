<?php
  include("../connect.php");
    
     $select_dept = mysql_query("SELECT code, name, description  FROM  department ORDER BY name");
 	 $list_dept = array();
      while($fetch_dept = mysql_fetch_assoc($select_dept)){
          $list_dept[] = $fetch_dept;
      }
      echo json_encode($list_dept);
   
?>