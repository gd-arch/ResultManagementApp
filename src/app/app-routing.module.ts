import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login-teacher/login.component';
import { RegisterComponent } from './register/register.component';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import {StudentDashboardComponent} from "./student-dashboard/student-dashboard.component";
import { HomeComponent } from './home/home.component';
import { LoginStudentComponent } from './login-student/login-student.component';
import { AuthGuard } from './shared/auth.guard';
import { RoleGuard } from './shared/role.guard';

const routes: Routes = [
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'login',component:LoginComponent},
  {path:'register',component:RegisterComponent} ,
  {path:'dashboard',component:TeacherDashboardComponent,canActivate:[AuthGuard,RoleGuard],data:{expectedRoles:['teacher']}},
  {path:'student-dashboard',component:StudentDashboardComponent,canActivate:[AuthGuard,RoleGuard],data:{expectedRoles:['student']}},
  {path:'home',component:HomeComponent},
  {path:'loginStudent',component:LoginStudentComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
