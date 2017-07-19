import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  today = new Date();
  currentMonth = this.today;

  ngOnInit() {
   
  }

  nextMonth(){
    var test = this.today.setMonth(this.today.getMonth()+1);
    this.currentMonth = new Date(test);

  }

}
