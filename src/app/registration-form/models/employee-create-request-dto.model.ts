import {Address} from './Address.model';

export interface EmployeeCreateRequestDTO {
  name: string;
  surname: string;
  email: string;
  password: string;
  phoneNumber: string;
  uidNo: string;
  role: string;
  locationName: string;
  locationAddress: Address;
}
