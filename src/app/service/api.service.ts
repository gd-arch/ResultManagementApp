import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  postStudent(data:any){
    return this.http.post<any>("http://localhost:3000/studentList/",data);
  }
  getStudents(){
    return this.http.get<any>("http://localhost:3000/studentList/");
  }
  getStudent(id:number){
    return this.http.get<any>("http://localhost:3000/studentList/"+id);
  }
  putStudent(data:any,id:number){
    return this.http.put<any>("http://localhost:3000/studentList/"+id,data);
  }
  deleteStudent(id:number){
    return this.http.delete<any>("http://localhost:3000/studentList/"+id);

  }


}
