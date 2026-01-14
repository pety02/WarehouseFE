import {Address} from './address.model';

export interface EmployeeUpdateRequestDTO {
  fireDate: string;
  email: string;
  password: string;
  phoneNumber: string;
  role: string;
  locationName: string;
  locationAddress: Address;
}
