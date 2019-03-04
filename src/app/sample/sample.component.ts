import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {
  buttons = [];
  constructor() { }
  onAdd(){
    var newButton ={name:""+(this.buttons.length)};
    this.buttons.push(newButton);
  }
  onRemove(deleteBtn){
    var deleteBtn1 =1;
    this.buttons.splice(deleteBtn,deleteBtn1);
  }
  ngOnInit() {
  }

}
