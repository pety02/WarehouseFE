import {Address} from '../../registration-form/models/Address.model';

export interface Location {
  id: string;
  name: string;
  address: Address;
  managerId: string;
  managerName: string;
  managerSurname: string;
  managerEmail: string;
  managerPhoneNumber: string;
}
