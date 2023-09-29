import { Component, OnInit,ViewChild } from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Router } from '@angular/router';
import { DialogComponent } from '../dialog/dialog.component';
import { ApiService } from '../service/api.service';
@Component({
  selector: 'app-teacher-dashboard',
  templateUrl: './teacher-dashboard.component.html',
  styleUrls: ['./teacher-dashboard.component.scss']
})

export class TeacherDashboardComponent implements OnInit{
  displayedColumns: string[] = ['rollNo', 'studentName', 'dob', 'score','action'];
  dataSource!: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;



  constructor(public dialog: MatDialog,private api:ApiService,private router:Router) {}
  ngOnInit(): void {
    this.getAllStudents();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'50%'
    }).afterClosed().subscribe(val=>{
      if(val==='save'){
        this.getAllStudents();
      }
    });
  }

  getAllStudents(){
    this.api.getStudents()
    .subscribe(
      {
        next:(res)=>{

          this.dataSource=new MatTableDataSource(res);
          this.dataSource.paginator=this.paginator;
          this.dataSource.sort=this.sort;
        },
        error:(err)=>{
          alert("error while fetching the records");
        }
      }
    )
  }
  editStudent(row:any){
    this.dialog.open(DialogComponent,{
      width:'30%',
      data:row
    }).afterClosed().subscribe(val=>{
      if(val==='update'){
        this.getAllStudents();
      }
    })
  }
  deleteStudent(id:number){
    this.api.deleteStudent(id)
    .subscribe(
      {
        next:(res)=>{
          alert("student deleted successfully");
          this.getAllStudents();

        },
        error:()=>{
          alert("error while deleting the student");
        }
    }
    )
  }
  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  logout(){
    localStorage.removeItem("token");
    localStorage.removeItem("teacher");
    this.router.navigate(['home']);
  }
}
