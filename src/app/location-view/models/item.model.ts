export interface Item {
  id: string;
  name: string;
  barcodeValue: string;
  expirationDateTime: string;
  sellingPrice: number;
  currencies: string[];
  packages: Array<{ first: string; second: string }>; // Pair<string,string>
  itemType: string;
}
