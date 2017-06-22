import { Component, OnInit } from '@angular/core';
import {ChildComponent} from '../child/child.component';

@Component({
  selector: 'app-input-output',
  templateUrl: './input-output.component.html',
  styleUrls: ['./input-output.component.css']
})
export class InputOutputComponent implements OnInit {
public childData: string;
    
  constructor() { }

  ngOnInit() {
  }

}
