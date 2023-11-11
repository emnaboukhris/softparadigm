export interface IEmployee {
  id?: string;
  firstName?: string;
  lastName?: string;
  code?: string;
  login?: string;
  email?: string;
  photo?: any;
  userId?: string;
  password?: string;
  phoneNumber1?: string;
  phoneNumber2?: string;
  birthDate?: string;
  genderId?: string;
  addresses?: any ;
  authorities?: string[];
  activated?: boolean;
}
export class Employee implements IEmployee {
  constructor(public id?: string, public firstName?: string, public lastName?: string,
              public email?: string, public password?: string, public phoneNumber1?: string,
              public phoneNumber2?: string, public genderId?: string,
              public code?: string,
              public login?: string,
              public photo?: any,
              public userId?: string,
              public addresses?: any, public authorities?: string[],
              public activated?: boolean) {
    this.activated = false;
  }
}
