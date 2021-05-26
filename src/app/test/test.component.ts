import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-test',
  template: `<h2>Welcome {{name}}</h2>
  <h2 class="text-success">Learning Angular</h2>
  <input #myInput type="text"><button (click)="showLog(myInput.value)">Log</button>
  <h2 [class.text-danger]="error">Learning Angular</h2>
  <h2 [class.text-danger]="error" class="">Learning Angular</h2>
  <h2 [ngClass]="messageClasses">Learning Angular 111</h2>
  <h2 [style.color]="'orange'">STLYE BINDING</h2>
  <h2 [style.color]="error ? 'blue': 'red'">STLYE BINDING condition check</h2>
  <h2 [style.color]="styleColor">STLYE BINDING Property bond</h2>
  <h2 [ngStyle]="multipleStyles">STLYE BINDING NGSyle</h2>
  <button (click)="onclick()">Greet</button>
  <button (click)="greeting='NO EVent handler called.Assigning value to property'">Greet</button>{{greeting}}
  
  <h2>{{"Parent Data"+ senddatafromParent}}</h2>
  <h2 [class]="classSuccess">Learning Angular</h2>`,
  styles: [`
  .text-danger{color:red;}
  .text-success{color:green;}
  .text-special{font-style:italic;}
  `]
})
export class TestComponent implements OnInit {
  public name = 'Nutan';
  error : boolean =  true;
  public classSuccess = "text-success";
  @Input() public senddatafromParent;

  
  public styleColor = "pink";
  public greeting="";
  public multipleStyles = {
    color : "grey",
    fontStyle : "italic"
  }


  public messageClasses= {
    "text-danger": !this.error,
    "text-success":this.error,
    "text-special":this.error,
  }

  constructor() { }

  ngOnInit() {
  }
    onclick(){
console.log('wekcome to basics Angular');
this.greeting = "Welcome to Angualr basics";
  }
  showLog(value){
    console.log(value);
  }
}
