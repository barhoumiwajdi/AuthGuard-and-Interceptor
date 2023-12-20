import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';
@Component({
  selector: 'app-diagram',
  templateUrl: './diagram.component.html',
  styleUrls: ['./diagram.component.css']
})
export class DiagramComponent implements OnInit {
  ngOnInit(): void {
    this.createChart();
  }



  public chart: any;

  createChart() {
    this.chart = new Chart("MyChart", {
      type: 'bar',
      data: {
        labels: ['2017', '2018', '2019', '2020', '2021'],
        datasets: [
          {
            label: "Plates, Sheets, ...",
            data: ["16847", "18586", "40067", "49520", "69296"],
            backgroundColor: "rgba(255, 99, 132, 0.7)",
          },
          {
            label: "Paper, Paperboard, ...",
            data: ["82097", "69387", "35335", "30952", "39685"],
            backgroundColor: "rgba(54, 162, 235, 0.7)",
          },
          {
            label: "Bottles, Flasks, ...",
            data: ["2173", "4771", "7901", "4239", "10806"],
            backgroundColor: "rgba(255, 205, 86, 0.7)",
          },
          {
            label: "Sacks, Bags, ...",
            data: ["47491", "38800", "57954", "43763", "48403"],
            backgroundColor: "rgba(75, 192, 192, 0.7)",
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        plugins: {
          title: {
            display: true,
            text: "Sales by Category (2017-2021)",
            font: {
              size: 18,
              weight: 'bold',
            }
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 14,
              }
            }
          },
        },
        scales: {
          x: {
            grid: {
              display: false // Hide X-axis grid lines for cleaner look
            },
            ticks: {
              font: {
                size: 14
              }
            }
          },
          y: {
            grid: {
              color: 'rgba(0, 0, 0, 0.1)', // Add a light grey color to Y-axis grid lines
            },
            ticks: {
              font: {
                size: 14
              },
            }
          }
        }
      }
    });
  }
}

