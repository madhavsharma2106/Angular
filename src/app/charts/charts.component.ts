import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  constructor() { }

  // Doughnut
  public doughnutChartLabels: string[] = ['Download Sales', 'In-Store Sales', 'Mail-Order Sales'];
  public bgColor: any = [
    {
      backgroundColor: [
        'rgba(29, 83, 150, 1)',
        'rgba(204, 59, 59, 1)',
        'rgba(136, 196, 37, 1)'
      ]
    }
  ];
  public doughnutChartData: number[] = [350, 450, 100];
  public doughnutChartType: string = 'doughnut';
  public options = {
    cutoutPercentage: 90,
  };

  

  ngOnInit() {
  }

}
