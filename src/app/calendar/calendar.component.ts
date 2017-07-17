import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  constructor() { }

  today = new Date();
  currentDate = this.today.getDate();
  // currentMonth = this.today.getMonth() + 1;
  currentMonth = 8;
  currentYear = this.today.getFullYear();
  nextMonth = this.currentMonth + 1;
  previousMonth = this.currentMonth - 1;

  currentMonthTotalDays = new Date(this.currentYear, this.currentMonth, 0).getDate();
  PrevMonthTotalDays = new Date(this.previousMonth, this.previousMonth, 0).getDate();
  startDay = new Date(this.currentYear + "-" + this.currentMonth + "-01").getDay();
  PrevMonthStartDate = this.PrevMonthTotalDays - this.startDay + 1;
  nextMonthEndDate = 42 - (42 - (7 - (7 - this.startDay))) - 1;

  ngOnInit() {
    console.log(42 - (42 - (7 - (7 - this.startDay))) - 1);

  }

}
