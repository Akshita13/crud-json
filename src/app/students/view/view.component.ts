import { Component, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { Students } from '../students.model';
import { Router } from '@angular/router';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-view',
  templateUrl: './view.component.html',
  styleUrls: ['./view.component.css']
})
export class ViewComponent implements OnInit {
  public students:Students[];
  constructor(private studentsService:StudentsService,
    private router:Router) { }

  ngOnInit() {
    this.getStudents();
  }

  public deleteStudents(id:number):void{
    this.studentsService.deleteStudents(id).subscribe();
    this.getStudents();
  }
  public getStudents():void{
    this.studentsService.getStudents().subscribe(
      student=>{this.students=student}
    )
  }
  public studentDelete(id:number):void{
    this.deleteStudents(id);
  }
  public studentEdit(id:number):void{
    this.router.navigate(['edit/'+id]);
  }


}
