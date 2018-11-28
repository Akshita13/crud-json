import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators, AbstractControl, FormArray } from '@angular/forms';
import { Students } from '../students.model';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public sub:string[];
  public studentForm: FormGroup;
  constructor(private studentService: StudentsService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.sub=[];
   }

  ngOnInit() {
    this.loadForm();
    this.editStudent();
  }
public editStudent():void{
 const id=+ this.route.snapshot.paramMap.get('id');
  this.studentService.editStudent(id).subscribe((student)=>
    this.dataLoad(student)
  )
}
public loadForm()
{
  this.studentForm=this.fb.group(
    {
      id:[""],
      firstName:["",Validators.required],
      lastName:["",Validators.required],
      address:this.fb.group(
        {
          street:["",Validators.required],
          city:["",Validators.required],
          state:["",Validators.required]
        }
      ),
      subjects:this.fb.array([
        this.fb.control('')
      ])
    }
  )

}
public dataLoad(student:Students)
{
  this.studentForm.patchValue(
    {
      id:student.id,
      firstName:student.firstName,
      lastName:student.lastName,
      address:{
        street:student.address.street,
        city:student.address.city,
        state:student.address.state
      },
      subjects:[student.subjects]
    }
  )
}

public updateStudent():void
{
  this.studentService.updateStudent(this.studentForm.value).subscribe(()=>{
    this.router.navigate(['view'])
  })
}

get subjects()
{
  return this.studentForm.get('subjects') as FormArray
}

addSubject()
{
  return this.subjects.push(this.fb.control(''))
}

addStudent():void{
  this.studentService.addStudent(this.studentForm.value).subscribe();
}
 
  
}
