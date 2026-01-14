import {TransferItemResponseDTO} from './transfer-item-response.model';
import {Address} from './address.model';

export interface TransferResponseDTO {
  id: string;
  deliveryDateTime: string;
  remarks?: string;
  createdBy?: string;
  updatedBy?: string;
  createdAt?: string;
  updatedAt?: string;
  transferResponseDTOList: TransferItemResponseDTO[];
  sourceLocationId: string;
  sourceLocationName: string;
  sourceLocationAddress: Address;
  destinationLocationId: string;
  destinationLocationName: string;
  destinationLocationAddress: Address;
}
