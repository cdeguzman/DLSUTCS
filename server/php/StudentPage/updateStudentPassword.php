<?php
//This code will update student password
  include("../connect.php");
     $secret_password = $_POST["secret_password"];
	 $secret_question = $_POST["secret_question"];
	 $secret_answer = $_POST["secret_answer"];
   	 $id = $_GET["id"];
    
	 mysql_query("UPDATE student SET 
	                 secret_password='$secret_password', 
					 secret_question='$secret_question',
					 secret_answer='$secret_answer'
				  WHERE id='$id'");
        

?>