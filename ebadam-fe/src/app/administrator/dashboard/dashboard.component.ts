import { Component, OnInit, ViewChild } from '@angular/core';
//import { ChartDataSets, ChartOptions, ChartType } from 'chart.js';
//import { Color, BaseChartDirective, Label } from 'ng2-charts';
//import * as pluginAnnotations from 'chartjs-plugin-annotation';
//import * as pluginDataLabels from 'chartjs-plugin-datalabels';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  clientName: string = '';
  clientEmail: string = '';
  showFiller = false;
  constructor() { }

  ngOnInit(): void {
  }

  
  //@ViewChild(BaseChartDirective, { static: true }) chart: BaseChartDirective;


  // events
  public chartClicked({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  public chartHovered({ event, active }: { event: MouseEvent, active: {}[] }): void {
    console.log(event, active);
  }

  // public barChartOptions: ChartOptions = {
  //   responsive: true,
  //   // We use these empty structures as placeholders for dynamic theming.
  //   scales: { xAxes: [{}], yAxes: [{}] },
  // };
  // public barChartLabels: Label[] = ['2015', '2016', '2017', '2018', '2019', '2020'];
  // public barChartType: ChartType = 'bar';
  // public barChartLegend = true;

  // public barChartData: ChartDataSets[] = [
  //   { data: [65, 59, 80, 81, 56, 55, 40], label: 'Direct Click' },
  //   { data: [28, 48, 40, 19, 86, 27, 90], label: 'Social Media' }
  // ];

// Pie
// public pieChartOptions: ChartOptions = {
//   responsive: true,
//   legend: {
//     position: 'top',
//   },
//   plugins: {
//     datalabels: {
//       formatter: (value, ctx) => {
//         const label = ctx.chart.data.labels[ctx.dataIndex];
//         return label;
//       },
//     },
//   }
// };
// public pieChartLabels: Label[] = [['Direct Sales'], ['Google Ads', 'Facebook Ads', 'Media.net'], ['Mail Sales']];
// public pieChartData: number[] = [300, 500, 100];
// public pieChartType: ChartType = 'pie';
// public pieChartLegend = true;
// public pieChartPlugins = [pluginDataLabels];
// public pieChartColors = [
//   {
//     backgroundColor: ['rgba(255,0,0,0.3)', 'rgba(0,255,0,0.3)', 'rgba(0,0,255,0.3)'],
//   },
// ];


// changeLabels() {
//   const words = ['hen', 'variable', 'embryo', 'instal', 'pleasant', 'physical', 'bomber', 'army', 'add', 'film',
//     'conductor', 'comfortable', 'flourish', 'establish', 'circumstance', 'chimney', 'crack', 'hall', 'energy',
//     'treat', 'window', 'shareholder', 'division', 'disk', 'temptation', 'chord', 'left', 'hospital', 'beef',
//     'patrol', 'satisfied', 'academy', 'acceptance', 'ivory', 'aquarium', 'building', 'store', 'replace', 'language',
//     'redeem', 'honest', 'intention', 'silk', 'opera', 'sleep', 'innocent', 'ignore', 'suite', 'applaud', 'funny'];
//   const randomWord = () => words[Math.trunc(Math.random() * words.length)];
//   this.pieChartLabels = Array.apply(null, { length: 3 }).map(_ => randomWord());
// }

// addSlice() {
//   this.pieChartLabels.push(['Line 1', 'Line 2', 'Line 3']);
//   this.pieChartData.push(400);
//   this.pieChartColors[0].backgroundColor.push('rgba(196,79,244,0.3)');
// }

// removeSlice() {
//   this.pieChartLabels.pop();
//   this.pieChartData.pop();
//   this.pieChartColors[0].backgroundColor.pop();
// }

// changeLegendPosition() {
//   this.pieChartOptions.legend.position = this.pieChartOptions.legend.position === 'left' ? 'top' : 'left';
// }


// public randomize(): void {
//   this.barChartType = this.barChartType === 'bar' ? 'line' : 'bar';
// }

}