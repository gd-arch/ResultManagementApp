import { Component, Inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { ApiService } from '../service/api.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  studentForm !:FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private api:ApiService,
    @Inject(MAT_DIALOG_DATA) public editData:any,
    private dialogRef:MatDialogRef<DialogComponent>

    ) {}

  ngOnInit(): void {
    this.studentForm=this.formBuilder.group(
      {
        rollNo:['',Validators.required],
        studentName:['',Validators.required],
        dob:['',Validators.required],
        score:['',Validators.required]

      }
    );

    if(this.editData){
     this.studentForm.controls['rollNo'].setValue(this.editData.rollNo);
     this.studentForm.controls['studentName'].setValue(this.editData.studentName);
     this.studentForm.controls['dob'].setValue(this.editData.dob);
     this.studentForm.controls['score'].setValue(this.editData.score);
    }

  }

  addStudent(){
    if(!this.editData){
      if(this.studentForm.valid){
      this.api.postStudent(this.studentForm.value)
      .subscribe({
        next:(res)=>{
          alert("student added successfully");
          this.studentForm.reset;
          this.dialogRef.close('save');
        },
        error:()=>{
          alert("error while adding the student");
        }
      })
    }
    }
    else{
      this.updateStudent();
    }

  }
  updateStudent(){
    this.api.putStudent(this.studentForm.value,this.editData.id)
    .subscribe(
      {
        next:(res)=>{
          alert("student updated successfully");
          this.studentForm.reset;
          this.dialogRef.close('update');
        },
        error:()=>{
          alert("error while Updating the student");
        }
    }
    )
  }

}
