import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js';
// core components
import { chartExample1, chartExample2, chartOptions, parseOptions } from "../../variables/charts";


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

  public datasets: any;
  public data: any;
  public salesChart;
  public clicked: boolean = true;
  public clicked1: boolean = false;

  constructor() { }

  ngOnInit() {

    this.datasets = [
      [0, 20, 10, 30, 15, 40, 20, 60, 60],
      [0, 20, 5, 25, 10, 30, 15, 40, 40]
    ];
    this.data = this.datasets[0];


    var chartOrders = document.getElementById('chart-orders');

    parseOptions(Chart, chartOptions());


    var ordersChart = new Chart(chartOrders, {
      type: 'bar',
      options: chartExample2.options,
      data: chartExample2.data
    });

    var chartSales = document.getElementById('chart-sales');

    this.salesChart = new Chart(chartSales, {
			type: 'line',
			options: chartExample1.options,
			data: chartExample1.data
		});
  
  
    this.getPosition().then(pos =>
    {
      console.log(`Positon: ${pos.lng} ${pos.lat}`);
    });
  
  
  }





  public updateOptions() {
    this.salesChart.data.datasets[0].data = this.data;
    this.salesChart.update();
  }


  getPosition(): Promise<any>
  {
    return new Promise((resolve, reject) =>
    {

      navigator.geolocation.getCurrentPosition(resp =>
      {

        resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
      },
        err =>
        {
          reject(err);
        });
    });

  }

}
