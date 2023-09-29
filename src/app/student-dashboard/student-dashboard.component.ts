import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-student-dashboard',
  templateUrl: './student-dashboard.component.html',
  styleUrls: ['./student-dashboard.component.scss']
})
export class StudentDashboardComponent implements OnInit {

  studentData:any;
  constructor(private router:Router) { 
    this.studentData=JSON.parse(localStorage.getItem('studentData')|| '{}');
  }
  ngOnInit(): void {
  }
logout(){
  localStorage.removeItem("token");
  localStorage.removeItem("student");
  this.router.navigate(['home']);
}
}
