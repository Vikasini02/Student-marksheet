
        function validate(){
            var name=document.getElementById("name").value;
            var rollno=document.getElementById("numb").value;
            var email=document.getElementById("email").value;
            var password=document.getElementById("eyep").value;
            var cpassword=document.getElementById("eyepc").value;
            var gen=document.forms["myform"]["gender"];
            if(name=='')
            {
                alert("Enter the Name!!!");
            return false;
            }
            else if(name>='0'&& name<='9')
            {
                alert("Enter a valid Name with alphabets only!!!");
                return false;
            }
            if(rollno=='')
            {
                alert('Enter the roll number!!!'); 
            return false;
            }
            if(isNaN(rollno))
            {
                alert("Only numbers are allowed!!!");
                return false;
            }
            if(email=='')
            {
                alert("Enter the email!!!");
            return false;
            }
            if(password=='')
            {
               alert("Password field cannot be empty!!!");
            return false;
            }
            if(cpassword=='')
            {
                alert("Confirm password field cannot be empty!!!");
                return false;
            }
            else if(password.length< 8)
            {
                alert("Enter a password of minimum length 8");
                return false;
            }
            else if(password!=cpassword)
            {
                alert("mismatch password");
            return false;
            }
            else if(gen[0].checked==false && gen[1].checked==false && gen[2].checked==false)
            {
                alert("Please enter your gender!!!");
                return false;
            }
            else
            {
                alert("Sign Up done successful!!!");
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
            function myFunctionc(){
            var a=document.getElementById("eyepc");
            var b=document.getElementById("hide3");
            var c=document.getElementById("hide4");
            if(a.type === 'password'){
                a.type="text";
                b.style.display="block";
                c.style.display="none";
            }
            else{
                a.type="password";
                b.style.display="none";
                c.style.display="block";
            }
            }