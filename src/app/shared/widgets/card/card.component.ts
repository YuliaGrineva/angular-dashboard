import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';


@Component({
  selector: 'app-widget-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {

  @Input()
  label!: string;
  @Input()
  total!: string;
  @Input()
  percentage!: string;
  @Input() 
  data: any[] = [];

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  


  constructor() { }

    ngOnInit(): void {
      this.chartOptions = 
      {
        chart: {
          type: 'area',
          backgroundColor: '',
          borderWidth: 0,
          margin: [2, 2, 2, 2],
          height: 60,


      },
      title: {
          text: ''
      },
      subtitle: {
          text: ''
      },
      tooltip: {
         split: true,
         outside: true,
      },
      legend: {
        enabled: false,
      },
      credits: {
        enabled: false,
      },
      exporting: {
        enabled: false,
      },
      xAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
      },
      yAxis: {
        labels: {
          enabled: false,
        },
        title: {
          text: null,
        },
        startOnTick: false,
        endOnTick: false,
      },
      
      series: [{
         data: this.data,
         type: 'area'
      }]
      };
  
      HC_exporting(Highcharts);
      
    setTimeout(() => {
      window.dispatchEvent(
        new Event('resize')
        );
    }, 300);
  
  }

  
}
