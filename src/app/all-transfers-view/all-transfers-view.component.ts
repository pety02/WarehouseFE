import { Component, OnInit } from '@angular/core';
import { MatTableDataSource, MatTableModule } from '@angular/material/table';
import { DatePipe, CommonModule, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { TransferService } from './transfer.service';
import {TransferResponseDTO} from './models/transfer-response.model';

@Component({
  selector: 'app-transfers',
  templateUrl: './all-transfers-view.component.html',
  styleUrls: ['./all-transfers-view.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NgIf,
    DatePipe,
    NavigationBarComponent,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule
  ]
})
export class AllTransfersViewComponent implements OnInit {

  displayedColumns: string[] = [
    'id', 'deliveryDateTime', 'sourceLocationName', 'destinationLocationName', 'remarks', 'actions'
  ];

  deleteErrorMessage: string | null = null;

  dataSource = new MatTableDataSource<TransferResponseDTO>();

  editingRowId: string | null = null;

  constructor(private transferService: TransferService) {}

  ngOnInit(): void {
    this.loadTransfers();
  }

  // Load all transfers from backend
  loadTransfers(): void {
    this.transferService.getAllTransfers().subscribe({
      next: transfers => this.dataSource.data = transfers,
      error: err => console.error('Error fetching transfers', err)
    });
  }

  // Start editing a row
  editTransfer(transfer: TransferResponseDTO): void {
    this.editingRowId = transfer.id;
  }

  // Cancel editing
  cancelEdit(): void {
    this.editingRowId = null;
    this.loadTransfers(); // reload original data from backend
  }

  // Save changes for a row
  saveTransfer(transfer: TransferResponseDTO): void {
    const updatePayload = {
      deliveryDateTime: transfer.deliveryDateTime,
      remarks: transfer.remarks,
      transferItems: transfer.transferResponseDTOList.map(i => i.id),
      sourceLocation: transfer.sourceLocationId,
      destinationLocation: transfer.destinationLocationId
    };

    this.transferService.updateTransfer(transfer.id, updatePayload).subscribe({
      next: updatedTransfer => {
        const index = this.dataSource.data.findIndex(t => t.id === updatedTransfer.id);
        if (index !== -1) this.dataSource.data[index] = updatedTransfer;
        this.dataSource._updateChangeSubscription(); // refresh table
        this.editingRowId = null;
      },
      error: err => console.error('Error saving transfer', err)
    });
  }

  // Delete a transfer
  deleteTransfer(transfer: TransferResponseDTO): void {
    if (this.editingRowId) return; // do not delete while editing

    this.deleteErrorMessage = ''; // reset error message

    this.transferService.deleteTransfer(transfer.id).subscribe({
      next: () => {
        this.dataSource.data = this.dataSource.data.filter(t => t.id !== transfer.id);
      },
      error: err => {
        if (err.status === 400) {
          this.deleteErrorMessage = 'Cannot delete transfer: it has associated items';
        } else if (err.status === 404) {
          this.deleteErrorMessage = 'Transfer not found or already deleted';
        } else if (err.status === 500) {
          this.deleteErrorMessage = 'Server error while deleting transfer';
        } else {
          this.deleteErrorMessage = 'Unexpected error occurred while deleting transfer';
        }
      }
    });
  }

  // Check if row is being edited
  isEditing(transfer: TransferResponseDTO): boolean {
    return this.editingRowId === transfer.id;
  }
}
