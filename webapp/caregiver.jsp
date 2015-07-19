<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<!-- Include CSS File Here -->
<link rel="stylesheet" href="css/style_login.css"/>
<script src="https://code.jquery.com/jquery-1.10.2.js"></script>

<title>Caregiver Form</title>
</head>
<script>
  sessionId = sessionStorage.getItem('sessionId');
  $.ajaxSetup({
    headers: 
    { 
      'Session-Id': sessionId,
      'x-my-custom-header': 'some value'
     }
  });
  alert('sessionId:'+sessionId);
</script>
<body>
<%@include file="menutab.jsp" %>
<div class="container">
<div class="main">
<form class="form" action="/v1/caregiver" name = "registerForm" id="registerForm" method="POST">
<h2>Create an Caregiver</h2>
<label>Role :</label>
<input type="radio" name="role" value="Pulmonology" Checked>Pulmonology
<input type="radio" name="role" value="FamilyMedicine">FamilyMedicine
<input type="radio" name="role" value="CareManager">CareManager
<input type="radio" name="role" value="CareGiver">CareGiver

<br>
<label>Email :</label>
<input type="email" name="email" id="email">
<label>Password :</label>
<input type="password" name="password" id="password">
<label>Firstname :</label>
<input type="text" name="fname">
<label>Lastname :</label>
<input type="text" name="lname">
<label>Phone :</label>
<input type="tel" name="phone">
<br>
<label>Give this caregiver admin privilege :</label>
<input type="checkbox" name="role_admin" value="1">
<input type="submit" />
</form>
</div>
</div>
<script>
/*
register response from REST call
{
 		"code":0,
 		"status":"success",
 		"version":1,
 		"sessionId":"null,
 		"timestamp":1431412792399
 		}	
*/
//callback handler for form submit
$("#registerForm").submit(function(e)
{
    var postData = $(this).serializeArray();
    var formURL = $(this).attr("action");
    alert('Sending sessionId:'+sessionId);
    $.ajax(
    {
        url : formURL,
        type: 'POST',
        data : postData,
        success:function(data, textStatus, jqXHR) 
        {
            //data: return data from server   
            if (data.code == 0)
            	alert("Successfully registration");
           	else
           		alert("Failed due to: " + data.status);        
        },
        error: function(jqXHR, textStatus, errorThrown) 
        {
            //if fails    
           // if (data != null)  
          	//  alert("failed:"+data);
        }
    });
    e.preventDefault(); //STOP default action
});
 
$("#registerForm").submit(); //Submit  the FORM
</script>
</body>
</html>