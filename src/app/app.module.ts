import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatCommonModule,MatNativeDateModule} from '@angular/material/core';
import {MatDialogModule} from '@angular/material/dialog';
import { DialogComponent } from './dialog/dialog.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatSortModule} from '@angular/material/sort';
import { TeacherDashboardComponent } from './teacher-dashboard/teacher-dashboard.component';
import { LoginComponent } from './login-teacher/login.component';
import { RegisterComponent } from './register/register.component';
import { StudentDashboardComponent } from './student-dashboard/student-dashboard.component';
import { HomeComponent } from './home/home.component';
import { LoginStudentComponent } from './login-student/login-student.component';


@NgModule({
  declarations: [
    AppComponent,
    DialogComponent,
    TeacherDashboardComponent,
    LoginComponent,
    RegisterComponent,
    StudentDashboardComponent,
    HomeComponent,
    LoginStudentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatCommonModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MatTableModule,
    MatPaginatorModule,
    MatSortModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
