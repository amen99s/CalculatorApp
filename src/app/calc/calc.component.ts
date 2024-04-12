import { Component } from '@angular/core';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrl: './calc.component.css'
})
export class CalcComponent {
  value:string = "0";
  valueonWork:string ="";
  afterValue:number=0;
  beforeValue:number =0;
  arthmetic:string="";

  Cleardisplay(){
    this.value = "0";
    this.valueonWork ="";
  }

  getDot(){
    this.valueonWork+=".";
    this.value = this.valueonWork;
  }


  getZero(){
    this.valueonWork+=0;
    this.value=this.valueonWork;
  }

  getOne(){
    this.valueonWork+=1;
    this.value=this.valueonWork;
  }
  getTwo(){
    this.valueonWork+=2;
    this.value=this.valueonWork;
  }

  getThree(){
    this.valueonWork+=3;
    this.value=this.valueonWork;
  }

  getFour(){
    this.valueonWork+=4;
    this.value=this.valueonWork;
  }

  getFive(){
    this.valueonWork+=5;
    this.value=this.valueonWork;
  }

  getSix(){
    this.valueonWork+=6;
    this.value=this.valueonWork;
  }

  getSeven(){
    this.valueonWork+=7;
    this.value=this.valueonWork;
  }

  getEight(){
    this.valueonWork+=8;
    this.value=this.valueonWork;
  }

  getNine(){
    this.valueonWork+=9;
    this.value=this.valueonWork;
  }
  
  getArthmetic( arthmatic:string){
    this.beforeValue = Number(this.value);
    this.Cleardisplay();
    switch (arthmatic){
      case "*":{
        this.arthmetic = "*";
        break;
      }
      case "+":{
        this.arthmetic = "+";
        break;
      }
      case "-":{
        this.arthmetic = "-";
        break;
      }
      case "/":{
        this.arthmetic = "/";
        break;
      }

      case "%":{
        this.arthmetic ="%";
        break;
      }
      
    }
  }

  Equal(before:number , arth:string){
    this.afterValue = Number(this.value);
    switch (arth){
      case "*":{
        this.value = String(before * this.afterValue );
        break;
      }
      case "+":{
        this.value = String(before + this.afterValue );
        break;
      }
      case "-":{
        this.value = String(before - this.afterValue );
        break;
      }
      case "/":{
        this.value = String(before / this.afterValue );
        break;
      }
      case "%":{
        this.value = String((before / this.afterValue)*100);
        break;
      }
    }

  }
}
