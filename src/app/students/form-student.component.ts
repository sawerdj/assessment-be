import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentService } from '../student.service';
import { Student } from './student';

@Component({
  selector: 'app-form-student',
  templateUrl: './form-student.component.html',
  styleUrls: ['./form-student.component.css']
})
export class FormStudentComponent implements OnInit {
  
  student:Student = new Student();
  title:String="Register"

  constructor(private studentService:StudentService, private router:Router, private activatedRoute:ActivatedRoute) {}
  
  ngOnInit(): void {
    this.updateStudents();

  }

  
 updateStudents(): void{
  this.activatedRoute.params.subscribe(
    e=>{
      let id=e['id'];
      
      if(id){
        this.studentService.get(id).subscribe(
          es => this.student = es
        );
      }
    }
  );
}


  create():void{
    console.log(this.student);
    this.studentService.create(this.student).subscribe(
      res=>this.router.navigate(['/students'])
    );
  }

  update():void{
    this.studentService.update(this.student).subscribe(
      res=>this.router.navigate(['/students'])

    )
  }

}
