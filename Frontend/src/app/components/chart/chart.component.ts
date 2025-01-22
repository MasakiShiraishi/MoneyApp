import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ElementRef,
  ViewChild,
} from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { Transaction } from '../../models/transaction';
import { CommonModule } from '@angular/common';

import { CategoryTranslatePipe } from '../../pipes/category-translate.pipe';
import { mainCategoryMap } from '../../category-mapping';


Chart.register(...registerables);

@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css'],
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() transactions: Transaction[] = [];
  @ViewChild('chartCanvas', { static: true }) chartCanvas!: ElementRef<HTMLCanvasElement>;
  chart: Chart | undefined;
  chartData: ChartData<'doughnut'> = {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [],
      },
    ],
  };
  chartOptions: ChartOptions<'doughnut'> = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (context) => {
            const label = context.label || '';
            const value = context.raw || 0;
            return `${label}: ${value} kr`;
          },
        },
      },
    },
  };
  private excludedCategories: string[] = ['lön', 'CSN bidrag'];

  ngOnInit(): void {
    this.createChart();
    this.updateChartData();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions']) {
      this.updateChartData();
    }
  }

  createChart(): void {
    if (this.chart) {
      this.chart.destroy();
    }
    const ctx = this.chartCanvas.nativeElement.getContext('2d');
    if (ctx) {
      this.chart = new Chart(ctx, {
        type: 'doughnut',
        data: this.chartData,
        options: this.chartOptions,
      });
    }
  }

  updateChartData(): void {
    const categoryTotals: { [key: string]: number } = {};

    this.transactions.forEach((transaction) => {
      if (this.excludedCategories.includes(transaction.category)) {
        return;
      }

      const mainCategory =
        mainCategoryMap[transaction.category] || transaction.category;
      const amount = Math.abs(transaction.amount);

      if (!categoryTotals[mainCategory]) {
        categoryTotals[mainCategory] = 0;
      }
      categoryTotals[mainCategory] += amount;
    });

    const newChartData: ChartData<'doughnut'> = {
      labels: Object.keys(categoryTotals).map((category) =>
        new CategoryTranslatePipe().transform(category)
      ),
      datasets: [
        {
          data: Object.values(categoryTotals),
          backgroundColor: Object.keys(categoryTotals).map(() =>
            this.getRandomColor()
          ),
        },
      ],
    };
    this.chartData = newChartData; 
    
    if (this.chart) {
      this.chart.data = this.chartData;
      this.chart.update();
    }
  }

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }
}
