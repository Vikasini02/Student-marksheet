
var express=require('express');
var app=express();
var bodyParser=require('body-parser');
var connection=require('./model/database');
app.set("views","./views")
app.set("view engine","ejs");
const { createConnection } = require('mysql');
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(__dirname));
app.use('/signup',function(req,res){
    console.log("sign up File Sent");
    res.render('signup');
})
app.post('/signupv',function(req,res){
    var name=req.body.name;
    var email=req.body.email;
    var rollno=req.body.rollno;
    var pass=req.body.password;
    var gender=req.body.gender;
    console.log("Sign up data submitted");
    connection.query('insert into signup values(?,?,?,?,?)',[rollno,name,email,pass,gender],(err,results)=>{
        if (err) throw err;
        if (results)
        {
            console.log("Values Inserted");
            res.render('Login');
        }
    })
});
app.use('/login',function(req,res){
    console.log("Login File Sent");
    res.render('login');
})
app.post('/loginv',function(req,res){
    var email=req.body.email;
    var pass=req.body.password;
    // console.log("Login data submitted");
    // res.send(`<h2 style=color:blue>E-Mail : ${email}<br>
    // Password : ${pass}`);
connection.query('select email from signup where email like ?',[email],(err,results)=>{
    if (err) throw err;
    if(results){
        connection.query('select password from signup where email like ? and password like ?)',[email,pass],(err,results)=>{
            connection.query('select student_marksheet.*,signup.email from student_marksheet join signup on student_marksheet.rollno=signup.rollno where signup.email like ?',[email],(err,data)=>{
                   if (err) throw err;
                   if(data)
                   {
                    res.render("mark",{userdata:data});
                    console.log(data);
                    console.log("Sucess!!!");
                    }
                })      
        })
    }
})
})
app.listen(5000,()=>{
    console.log("Server is listening at port 5000");
})