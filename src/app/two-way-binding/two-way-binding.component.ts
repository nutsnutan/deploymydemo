import { Component, OnInit } from '@angular/core';

@Component({
selector: '[app-two-way-binding]',
  template: ` <input [(ngModel)] = "name" type="text"> {{name}}
  <h2 *ngIf="true">Value for ngIf structural directive</h2>
  <h2 *ngIf="struCondition;" >Value for ngIf structural directive Hidden</h2>
  <h2 *ngIf="struCondition; else elseBlock" ></h2>
  <ng-template #elseBlock>thsi is else block </ng-template>
<div *ngIf="struCondition; then elseBlockwa; else thenBlock"></div>
  <ng-template #thenBlock>If block</ng-template>
  <ng-template #elseBlockwa>Else block</ng-template>     `,
  styleUrls: ['./two-way-binding.component.css']
})
export class TwoWayBindingComponent implements OnInit {
public name='Nutan';
public struCondition=false;
constructor() { }

  ngOnInit() {
  }

}
