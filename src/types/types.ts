export interface IDepartment {
  id: number;
  name: string;
}

export interface IProfession {
  id: number;
  name: string;
}

export interface IDoctor {
  id: number;
  name: string;
  profession?: number | undefined;
  department: number | undefined;
  main: boolean;
}

export interface IStaffData {
  Staff: IDoctor[];
  professions: IProfession[];
  departments: IDepartment[];
}

export enum DoctorOrNurse {
  Doctor = 1,
  Nurse = 2,
}
