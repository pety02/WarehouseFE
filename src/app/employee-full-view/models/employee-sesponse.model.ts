import {Address} from './address.model';

export interface EmployeeResponseDTO {
  id: string;
  name: string;
  surname: string;
  uidNo: string;
  hireDate: string; // ISO string
  fireDate?: string; // optional ISO string
  email: string;
  phoneNumber: string;
  role: string;
  locationId: string;
  locationName: string;
  locationAddress?: Address; // optional
}
