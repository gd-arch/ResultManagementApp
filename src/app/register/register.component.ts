import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,Validators } from '@angular/forms';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  public signUpForm !:FormGroup;

  constructor(private formBuilder:FormBuilder,private http:HttpClient,private router:  Router) { }

  ngOnInit(): void {
    this.signUpForm=this.formBuilder.group({
      fullName:['',Validators.required],
      email:['',[Validators.required,Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]],
      password:['',[Validators.required,Validators.minLength(6)]],
      mobile:['',[Validators.required, Validators.pattern("[0-9 ]{10}")]]
      
    })
    
  }
  signUp(){
    this.http.post<any>("http://localhost:3000/signupusers",this.signUpForm.value).subscribe(
      res=>{
        alert("signup successfull");
        this.signUpForm.reset();
        this.router.navigate(['login']);
    },err=>{
      alert("something went wrong");
    }  )

  }
  get registerForm() { return this.signUpForm.controls; }


}
