export interface StockAvailabilityDTO {
  piecesCount: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  item: string;
  warehouseZone: string;
}

export interface LowStockAlertDTO {
  alertDate: string;
  message: string;
  actualCount: number;
  neededCount: number;
  recommendations: string;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  stockAvailability: StockAvailabilityDTO;
  employees: string[];
}
