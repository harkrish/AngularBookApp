import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'firstone',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'example-app';
  trainer = "Hari"
  //functions in Component are created as event handlers or functions to manipulate the data of the Component(add, rmove, update.....)
  
  //forms part
  regForm : FormGroup; 
  submitted : boolean = false; 
   constructor(private Formbuilder : FormBuilder) {

   }
  ngOnInit(): void {
    this.regForm = this.Formbuilder.group({
      fname : [ '',Validators.required],
      lname : [ '',Validators.required],
      email : [ '',[Validators.required,Validators.email]],
      password : [ '',[Validators.required,Validators.minLength(8)]],
    });
  }
  
  onSubmit() { 
    this.submitted = true; 
    if( this.regForm.invalid) {
      return;
    }
    alert("Success !!");
  }

  clickOnMe(){
    this.trainer = "Hari"
    alert("I was clicked")
  } 


  
}
