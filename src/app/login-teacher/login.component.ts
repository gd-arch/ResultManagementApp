import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login-teacher',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginForm !:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:Router) { }

  ngOnInit(): void {
    this.loginForm=this.formBuilder.group({
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',Validators.required]

    })
  }
  login(){
  let url="http://localhost:3000/signupusers";
  this.http.get<any>(url)
    .subscribe({next:(res:any)=>{
      const isUserPresent=res.find((a:any)=>{
        return a.email===this.loginForm.value.email &&
        a.password===this.loginForm.value.password ;

      });
      if(isUserPresent){
        alert("login-teacher success");

        //need to come from server
        localStorage.setItem('token',"ekfvdFDSFjfkdFrjfSgnDeDriforf.5F4ESF62@#545XCSDAD4334USA54PABASD5342fs");
        localStorage.setItem('userType','teacher');
        // if(this.loginForm.value.role ==='teacher')

        this.loginForm.reset();
        this.router.navigate(['dashboard']);


      }
      else{
        alert("User not found ! Please check if email, password is correct!");
      }

    },
  error:()=>{
    alert("Some error occured while logging in!!")
  }});



  }

}
