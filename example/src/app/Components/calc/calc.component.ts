import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent /*implements OnInit*/ {
  //2 values to add, a result to display, operand to tell what operation U R doing
  firstValue : number  = 120;
  secondValue : number  = 20;
  resultValue : number  = this.firstValue + this.secondValue;
  operand : string = "Add";
  title : string = "My Calc Program!!!"
  //This function is used to intialize the data of Ur component
  // ngOnInit(): void {
  // }

  process(){
    switch (this.operand) {
      case "Add":
        this.resultValue = this.firstValue + this.secondValue;  
        break;
    
      case "Subtract":
        this.resultValue = this.firstValue - this.secondValue;  
        break;
    
      case "Multiply":
        this.resultValue = this.firstValue * this.secondValue;  
        break;
    
      case "Divide":
        this.resultValue = this.firstValue / this.secondValue;  
        break;
    }    
  }

}