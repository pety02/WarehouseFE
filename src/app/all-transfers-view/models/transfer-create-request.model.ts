export interface TransferCreateRequestDTO {
  deliveryDateTime: string;
  remarks?: string;
  transferItems: string[]; // list of transfer item IDs
  sourceLocation: string;
  destinationLocation: string;
}
