import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { Student } from './student';

@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})

export class StudentsComponent implements OnInit {

  title:string="List of Students for Ista";
  subtitle:string="Thanks for the opportinity";

  students:Student[];

  constructor(private studentService:StudentService) {}

  ngOnInit(): void {
   this.studentService.getAll().subscribe(
     e => this.students = e
   );
  }

  delete(student:Student):void{
    console.log("Form delete");
    this.studentService.delete(student.id).subscribe(
      res=>this.studentService.getAll().subscribe(
        response=>this.students=response
      )
    );
  }
}
