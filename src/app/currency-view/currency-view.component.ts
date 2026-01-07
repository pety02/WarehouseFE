import { Component, OnInit, Input } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner'; // optional for loading
import { HttpClientModule } from '@angular/common/http';
import {CurrencyDTO, CurrencyService} from './currency.service';

@Component({
  selector: 'app-currency-view',
  standalone: true,
  imports: [CommonModule, MatTableModule, HttpClientModule, MatProgressSpinnerModule],
  templateUrl: './currency-view.component.html',
  styleUrls: ['./currency-view.component.css']
})
export class CurrencyViewComponent implements OnInit {

  @Input() currencyId!: string;

  displayedColumns: string[] = ['name', 'abbreviation'];
  dataSource = new MatTableDataSource<CurrencyDTO>([]);
  loading = false;
  error: string | null = null;

  constructor(private stockService: CurrencyService) { }

  ngOnInit(): void {
    if (!this.currencyId) {
      this.error = 'Currency ID is required';
      return;
    }

    this.loading = true;
    this.stockService.getCurrencyById("11111111-1111-1111-1111-111111111111").subscribe({
      next: (data: CurrencyDTO) => {
        this.dataSource.data = [{
          name: data.name,
          abbreviation: data.abbreviation?.split('-')[0] || ''
        }];
        console.log(data);
        this.loading = false;
      },
      error: () => {
        this.dataSource.data = [];
        this.loading = false;
      }
    });
  }
}
