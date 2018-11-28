import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms'
import { StudentsRoutingModule } from './students-routing.module';
import { ViewComponent } from './view/view.component';
import { AddComponent } from './add/add.component';
import { EditComponent } from './edit/edit.component';
import { StudentsService } from './students.service';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    StudentsRoutingModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ViewComponent, AddComponent, EditComponent],
  providers:[StudentsService]
})
export class StudentsModule { }
