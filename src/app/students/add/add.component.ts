import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { FormGroup, FormBuilder, Validators, FormArray } from '@angular/forms';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  studentsForm: FormGroup;

  constructor(private studentService: StudentsService,
    private fb: FormBuilder) {

  }

  ngOnInit() {
    this.studentsForm = this.fb.group(
      {
        firstName: ["", Validators.required],
        lastName: ["", Validators.required],
        address: this.fb.group(
          {
            street: ["", Validators.required],
            city: ["", Validators.required],
            state: ["", Validators.required],
          }
        ),
        subjects: this.fb.array(
          [
              
          ]
        )
      }
    )
  }
  get subjects() {
    return this.studentsForm.get('subjects') as FormArray;
  }
  addSubject() {
    this.subjects.push(this.fb.control(''));
  }

  addStudent():void{
    this.studentService.addStudent(this.studentsForm.value).subscribe();
  }

}
