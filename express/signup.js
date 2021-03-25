function set_my_user(){
    var user_name = document.getElementById("user_sign").value;
    var user_pass = document.getElementById("user_pass").value;
    var user_pass_r = document.getElementById("user_pass_r").value;
    
    if(user_pass == user_pass_r){
        localStorage.setItem('userName', user_name);
        localStorage.setItem('userPass', user_pass);    
        alert("Sign Up is Successfull!!! Go to Sign In.");
    }
    else { alert("Pasword doesn't Match");}
}