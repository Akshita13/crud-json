import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Students } from '../../students/students.model';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  @Input() students:Students[];
  @Output() studentDeleteClicked=new EventEmitter;
  @Output() studentEditClicked=new EventEmitter;
  constructor() { }

  ngOnInit() {
  }
  public editStudent(id:number):void{
    this.studentEditClicked.emit(id);
  }
  public deleteStudents(id:number):void{
   
   
    
    this.studentDeleteClicked.emit(id);
  }
 
    
}

