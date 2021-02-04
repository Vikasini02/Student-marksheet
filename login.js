
function validate(){
var E=document.getElementById("email").value;
var password=document.getElementById("eyep").value;
if(E == '')
{
    alert('Email is must!!!');
    return false;
}
else if(password=='')
{
    alert('Password field cannot be empty');
    return false;
}
else if(password.length<8)
{
   alert("Enter a minimum password of length 8");
   return false;
}
else{
  alert('Login Successful!!!');
return true;
}
}
function myFunction(){
    var x=document.getElementById("eyep");
    var y=document.getElementById("hide1");
    var z=document.getElementById("hide2");
    if(x.type === 'password'){
        x.type="text";
        y.style.display="block";
        z.style.display="none";
    }
    else{
        x.type="password";
        y.style.display="none";
        z.style.display="block";
    }

}