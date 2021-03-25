function check_my_user(){
    var user_log = document.getElementById("user_log").value;
    var log_pass = document.getElementById("log_pass").value;
    var stored_user = localStorage.getItem('userName');
    var stored_pass = localStorage.getItem('userPass');
    if(user_log != stored_user){  
        alert("User doesn't exist!!");
    }
    else if(user_log == stored_user && log_pass != stored_pass){   
        alert("Wrong Password!!!");
    }
    else {
    	location.href = "home/";
    }
}