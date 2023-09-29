import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-login-teacher-student',
  templateUrl: './login-student.component.html',
  styleUrls: ['./login-student.component.scss']
})
export class LoginStudentComponent implements OnInit {
  public loginForm !:FormGroup;
  public date!:Date;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.date = new Date();
    this.loginForm=this.formBuilder.group({
      rollno:['',Validators.required],
      dob:['',Validators.required]

    })
  }
  login(){
  let url="http://localhost:3000/studentList";
  console.log(this.loginForm.value.rollno);
  this.http.get<any>(url)
    .subscribe({next:(res:any)=>{
      const isUserPresent=res.find((a:any)=>{

        if( a.rollNo==this.loginForm.value.rollno &&
        formatDate(new Date(a.dob.substring(0,10)),'yyyy-MM-dd','en_US')===formatDate(new Date(this.loginForm.value.dob),'yyyy-MM-dd','en_US')){
          localStorage.setItem('userType','student');
          localStorage.setItem('studentData',JSON.stringify(a));
          return true;
        }
        return false;

      });
      if(isUserPresent){
        alert("login-teacher success");

        localStorage.setItem('token',"Fjfkd5453FrjfSgDFDS4rekSF62@fvdiDADforf.f4PA5F4E#34UnDeX5BASCS34SAD52s");

        this.loginForm.reset();
        this.router.navigate(['student-dashboard']);


      }
      else{
        alert("User not found ! Please check if rollno, dob is correct!");
      }

    },
  error:()=>{
    alert("Some error occured while logging in!!")
  }});



  }

}


