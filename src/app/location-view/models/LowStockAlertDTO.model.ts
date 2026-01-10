export interface StockAvailabilityDTO {
  piecesCount: number;
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  item: string;           // name of the item
  warehouseZone: string;  // name of the zone
}

export interface LowStockAlertDTO {
  id: string;
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
  employees: string[];    // list of employee names or ids
}
