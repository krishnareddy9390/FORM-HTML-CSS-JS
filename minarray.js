function validate(){
    var username=document.getElementById("username");
    var password=document.getElementById("password");
    if(username.value =="" && password.value==""){
        text = "Enter valid username and password";
      
      document.getElementById("error1").innerHTML = text;
      document.getElementById("error").innerHTML = "";
      document.getElementById("errors").innerHTML = "";
        return false;
    }
    else{
        document.getElementById("error1").innerHTML = "";
  
    }
    if(password.value=="" || username.value >1){
        password="Enter valid password"
          document.getElementById("errors").innerHTML = password;
          document.getElementById("error").innerHTML = "";

    return false;
       }
    
    else{
        document.getElementById("errors").innerHTML = "";
    }
   if(username.value=="" || password.value>1){
    username="enter the valid name"
    document.getElementById("error").innerHTML = username;
    document.getElementById("errors").innerHTML = "";

return false;
   }
   else{
    document.getElementById("error").innerHTML = "";

   }
   
}
