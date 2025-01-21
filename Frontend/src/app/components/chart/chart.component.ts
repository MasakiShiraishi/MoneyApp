import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { ChartData, ChartOptions } from 'chart.js';
import { Transaction } from '../../models/transaction';
import { CommonModule } from '@angular/common';
import {
  BaseChartDirective,
  provideCharts,
  withDefaultRegisterables,
} from 'ng2-charts';
import { mainCategoryMap } from '../../category-mapping';
import { CategoryTranslatePipe } from '../../pipes/category-translate.pipe';


@Component({
  selector: 'app-chart',
  standalone: true,
  imports: [CommonModule, BaseChartDirective],
  providers: [provideCharts(withDefaultRegisterables())],
  templateUrl: './chart.component.html',
  styleUrl: './chart.component.css',
})
export class ChartComponent implements OnInit, OnChanges {
  @Input() transactions: Transaction[] = [];
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
    this.updateChartData();
  }
  ngOnChanges(changes: SimpleChanges): void {
    if (changes['transactions']) {
      console.log('ngOnChanges triggered:', changes);
      this.updateChartData();
    }
  }

  updateChartData(): void {
    console.log('Updating chart data with transactions:', this.transactions); // debug
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

    // this.chartData.labels = Object.keys(categoryTotals).map(category => new CategoryTranslatePipe().transform(category));
    // this.chartData.datasets[0].data = Object.values(categoryTotals);
    // this.chartData.datasets[0].backgroundColor = this.chartData.labels.map(() =>
    // this.getRandomColor()
    // );
    // console.log('Updated chart data:', this.chartData); // debug

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
    console.log('Updated chart data:', this.chartData); // デバッグ用ログ
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
