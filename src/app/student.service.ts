import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './students/student';

@Injectable({
  providedIn: 'root'
})


export class StudentService {

  
  private url:string="http://localhost:8080/api/students";

  constructor(private http:HttpClient) { }

  //get all students
  getAll():Observable<Student[]>{
    return this.http.get<Student[]>(this.url);
  }

  //get only one student
  get(id:number):Observable<Student[]>{
    return this.http.get<Student[]>(this.url + '/' + id);
  }

  //create student
  create(student:Student):Observable<Student>{
    return this.http.post<Student>(this.url, student);
  }

  //update
  update(student:Student):Observable<Student>{
    return this.http.put<Student>(this.url, student);
  }

  //delete student
  delete(id:number):Observable<Student[]>{
    return this.http.delete<Student[]>(this.url + '/' + id);
  }
}
