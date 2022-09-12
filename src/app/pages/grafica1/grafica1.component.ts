import { Component } from '@angular/core';
import { ChartData, ChartEvent, ChartType, Color } from 'chart.js';

@Component({
  selector: 'app-grafica1',
  templateUrl: './grafica1.component.html',
  styles: [
  ]
})
export class Grafica1Component {

  title1: string = "Ventas";
  title2: string = "Compras"

  doughnutChartLabels1: string[] = [ 'Impresoras', 'Laptops', 'Smartphone' ];
  public data1:ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels1,
    datasets: [ {  data: [ 200, 100, 300 ],
                  backgroundColor: ['#6857E0','#005FEE','#F02045'],
                  hoverBackgroundColor: ['#6857E0','#005FEE','#F02045'],
                  hoverBorderColor:['#000000','#000000','#00000003']
                },
              ]
  };

  doughnutChartLabels: string[] = [ 'Pan', 'Refresco', 'Tacos' ];
  public data2:ChartData<'doughnut'> = {
    labels: this.doughnutChartLabels,
    datasets: [ {  data: [ 40, 10, 100 ],
                  backgroundColor: ['#6857E6','#009FEE','#F02059'],
                  hoverBackgroundColor: ['#6857E6','#009FEE','#F02059'],
                  hoverBorderColor:['#000000','#000000','#00000003']
                },
              ]
  };

}
