import { Component } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 
drug :any = [];
drug1= [    {
  "label": "Date of Birth (YYYY-MM-DD)",
  "key": "birthday",
  "isRequired": true,
  "order": 1,
  "isReadonly": false,
  "type": "date"
},
{
  "label": "Gestational Age",
  "key": "gestationalAge",
  "isRequired": true,
  "order": 3,
  "unit": "weeks",
  "isReadonly": false,
  "type": "number"
},
{
  "label": "Sex",
  "items": [
    {
      "value": "male",
      "text": "Male"
    },
    {
      "value": "female",
      "text": "Female"
    }
  ],
  "key": "sex",
  "isRequired": true,
  "order": 4,
  "isReadonly": false,
  "type": "dropdown"
},
{
  "label": "Height",
  "key": "height",
  "isRequired": true,
  "order": 5,
  "unit": "cm",
  "isReadonly": false,
  "type": "number"
},
{
  "label": "Weight",
  "key": "weight",
  "isRequired": true,
  "order": 6,
  "unit": "kg",
  "isReadonly": false,
  "type": "number"
},
{
  "label": "BMI",
  "key": "bmi",
  "order": 11,
  "unit": "kg/m²",
  "isReadonly": true,
  "type": "number"
}];



  drug2 =  [
    {
      "label": "Date of Birth (YYYY-MM-DD)",
      "key": "birthday",
      "isRequired": true,
      "order": 1,
      "isReadonly": false,
      "type": "date"
    },
    {
      "label": "Sex",
      "items": [
        {
          "value": "male",
          "text": "Male"
        },
        {
          "value": "female",
          "text": "Female"
        }
      ],
      "key": "sex",
      "isRequired": true,
      "order": 2,
      "isReadonly": false,
      "type": "dropdown"
    },
    {
      "label": "Weight",
      "key": "weight",
      "isRequired": true,
      "order": 3,
      "unit": "kg",
      "isReadonly": false,
      "type": "number"
    }
  ];

  
hide= false;
  dynamicForm: FormGroup;

  constructor() {
    const controls  = {};
     
    this.dynamicForm = new FormGroup(
       controls
     );
  }

 

  genForm(){
    this.drug = [];
    this.hide=true;
    this.drug = this.drug1;
   
  }

  genForm1(){
    this.drug = [];
    this.hide=true;
    this.drug = this.drug2;
  
  }

}