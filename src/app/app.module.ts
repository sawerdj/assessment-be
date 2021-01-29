import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'

import {Routes, RouterModule } from '@angular/router'

import { FormsModule } from '@angular/forms' 

import { AppComponent } from './app.component';
import { StudentsComponent } from './students/students.component';
import { FormStudentComponent } from './students/form-student.component';

const routes:Routes=[
  {path:'', redirectTo:'/students', pathMatch:'full'},
  {path:'students', component:StudentsComponent },
  {path:'students/form', component:FormStudentComponent },
  {path:'students/form/:id', component:FormStudentComponent },
]

@NgModule({
  declarations: [
    AppComponent,
    StudentsComponent,
    FormStudentComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
