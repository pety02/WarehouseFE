import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe, CurrencyPipe, CommonModule, NgIf } from '@angular/common';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { ItemsService } from './items.service';
import { ItemDTO } from './models/ItemDTO.model';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import {MatFormField, MatInput} from '@angular/material/input';

@Component({
  selector: 'app-all-items-view',
  templateUrl: './all-items-view.component.html',
  styleUrls: ['./all-items-view.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,            // For ngModel
    NgIf,
    DatePipe,
    CurrencyPipe,
    NavigationBarComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatInput,
    MatFormField
  ]
})
export class AllItemsViewComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 'name', 'barcode', 'expiration', 'price', 'type', 'actions'
  ];
  deleteErrorMessage: string | null = null;

  dataSource = new MatTableDataSource<ItemDTO>();

  // Track the row being edited
  editingRowId: string | null = null;

  constructor(
    private itemsService: ItemsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const locationId = localStorage.getItem("locationId");
    if (locationId) {
      console.log("Fetching items for location:", locationId);
      this.itemsService.getAllItemsByLocationId(locationId).subscribe({
        next: items => this.dataSource.data = items,
        error: err => console.error('Error fetching items', err)
      });
    }
  }

  // Start editing a row
  editItem(item: ItemDTO) {
    this.editingRowId = item.id;
  }

  // Cancel editing
  cancelEdit() {
    this.editingRowId = null;
    // Optionally reload original data from BE to reset changes
    const locationId = localStorage.getItem("locationId");
    if (locationId) {
      this.itemsService.getAllItemsByLocationId(locationId).subscribe({
        next: items => this.dataSource.data = items
      });
    }
  }

  // Save the changes
  saveItem(item: ItemDTO) {
    const locationId = localStorage.getItem("locationId");
    if (locationId) {
      this.itemsService.updateItem(locationId, item).subscribe({
        next: updatedItem => {
          const index = this.dataSource.data.findIndex(i => i.id === updatedItem.id);
          if (index !== -1) this.dataSource.data[index] = updatedItem;
          this.dataSource._updateChangeSubscription();
          this.editingRowId = null;
        },
        error: err => console.error('Error saving item', err)
      });
    }
  }

  // Delete an item
  deleteItem(item: ItemDTO) {
    const locationId = localStorage.getItem("locationId");
    if (!locationId || this.editingRowId) return;

    // reset messages
    this.deleteErrorMessage = '';

    this.itemsService.deleteItem(locationId, item.id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter(i => i.id !== item.id);
      },
      error: err => {
        if (err.status === 409) {
          this.deleteErrorMessage =
            'Cannot delete item: stock exists in warehouse';
        } else if (err.status === 404) {
          this.deleteErrorMessage =
            'Item not found or already deleted';
        } else if (err.status === 500) {
          this.deleteErrorMessage =
          'There is item stocks connected with this item. So, it cannot be deleted';
        } else {
          this.deleteErrorMessage =
            'Unexpected error occurred while deleting item';
        }
      }
    });
  }

  // Check if row is being edited
  isEditing(item: ItemDTO): boolean {
    return this.editingRowId === item.id;
  }

}
