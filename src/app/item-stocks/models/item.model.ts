export interface Item {
  id: string;
  name: string;
  barcodeValue: string;
  expirationDateTime: string;
  sellingPrice: number;
  type?: {
    name: string;
  };
  locations?: {
    name: string;
  }[];
}
