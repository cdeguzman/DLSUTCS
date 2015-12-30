<?php
  //This php code is for displaying the selected course
  include("../connect.php");
    $code = $_GET["code"];
     $select_course = mysql_query("SELECT c.name, c.description, c.unit, p.name as phase_name, d.name as dept_name,
                                   c.start_regular_defense_week, c.end_regular_defense_week, c.regular_defense_minute,
                                   c.regular_defense_applicable, c.start_redefense_week, c.end_redefense_week,
 								   c.redefense_minute, c.redefense_applicable, c.start_outstanding_defense_week,
								   c.end_outstanding_defense_week, c.outstanding_defense_minute, c.outstanding_defense_applicable,
								   c.deadline_of_deliverable_week FROM course c, phase p, department d
                                    WHERE c.code='$code' AND c.phase_code = p.code AND c.department_code=d.code");
 	 $list_course = array();
      while($fetch_course = mysql_fetch_assoc($select_course)){
          $list_course[] = $fetch_course;
      }
      echo json_encode($list_course);
   
?>