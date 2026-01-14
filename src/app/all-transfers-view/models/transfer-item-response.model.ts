import {Address} from './address.model';

export interface TransferItemResponseDTO {
  id: string;
  quantity: number;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  itemId: string;
  itemName: string;
  itemBarcodeValue: string;
  transferDate?: string;
  transferRemarks?: string;
  sourceLocationName?: string;
  sourceLocationAddress?: Address;
  destinationLocationName?: string;
  destinationLocationAddress?: Address;
}
