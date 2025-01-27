import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
  ElementRef,
  ViewChild,
  Inject,
  PLATFORM_ID,
} from '@angular/core';
import { Chart, ChartData, ChartOptions, registerables } from 'chart.js';
import { Transaction } from '../../models/transaction';
import { CommonModule, isPlatformBrowser } from '@angular/common';

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
  private colorPalette: string[] = [
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40',
    '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'
  ];

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {}
  ngOnInit(): void {
    if(isPlatformBrowser(this.platformId)) {
    this.createChart();
    this.updateChartData();
  }
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
          backgroundColor: Object.keys(categoryTotals).map((_, index) =>
            this.getRandomColor(index)
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

  getRandomColor(index: number): string {
    return this.colorPalette[index % this.colorPalette.length];
  }  
}
