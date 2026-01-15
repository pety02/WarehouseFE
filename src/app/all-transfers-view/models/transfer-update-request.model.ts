export interface TransferUpdateRequestDTO {
  deliveryDateTime: string;
  remarks?: string;
  transferItems: string[];
  sourceLocation: string;
  destinationLocation: string;
}
