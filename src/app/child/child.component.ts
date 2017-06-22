import { Component, OnInit } from '@angular/core';
import {EventEmitter} from '@angular/core';
@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  inputs:['parentData'],
outputs:['childEvent']
})
export class ChildComponent implements OnInit {
    parentData: String;
    
    childEvent = new EventEmitter<string>();
    
onChange(value:string){
        this.childEvent.emit(value);
    }
  constructor() { }
    

  ngOnInit() {
  }

}
