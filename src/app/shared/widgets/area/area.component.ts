import { Component, OnInit, Input } from '@angular/core';
import * as Highcharts from 'highcharts';
import HC_exporting from 'highcharts/modules/exporting';



@Component({
  selector: 'app-widget-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent implements OnInit {

  Highcharts: typeof Highcharts = Highcharts;
  chartOptions: Highcharts.Options = {};

  @Input() data = [];
  

  constructor() { }

  ngOnInit(): void {
    this.chartOptions = 
    {
      chart: {
        type: 'area'
    },
    title: {
        text: 'TEXT TEXT TEXT'
    },
    subtitle: {
        text: 'Demo'
    },
    tooltip: {
        shared: true,
        headerFormat: '<span style="font-size:12px"><b>{point.key}</b></span><br>'
    },
    credits: {
      enabled: false,
    },
    exporting: {
      enabled: true,
    },
    
    series: [{
      data: this.data,
      type: 'area'
   }]
  }

    HC_exporting(Highcharts);
    
  setTimeout(() => {
    window.dispatchEvent(
      new Event('resize')
      );
  }, 300);

}
}