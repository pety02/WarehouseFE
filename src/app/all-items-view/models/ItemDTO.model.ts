export interface Address {
  street: string;
  city: string;
  zipCode: string;
  country: string;
}

export interface LocationDTO {
  id: string;
  name: string;
  address: Address;
  managerId: string;
  managerName: string;
  managerSurname: string;
  managerEmail: string;
  managerPhoneNumber: string;
}

export interface WarehouseZoneDTO {
  id: string;
  name: string;
  storageTypeName: string;
  locations: LocationDTO[];
}

export interface Pair<K, V> {
  key: K;
  value: V;
}

export interface ItemDTO {
  id: string;
  name: string;
  barcodeValue: string;
  expirationDateTime: string;
  sellingPrice: number;
  currencies: string[];
  packages: Pair<string, string>[];
  itemType: string;
  warehouseZone: WarehouseZoneDTO;
}
