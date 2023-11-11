export interface ITenant {
  id?: string;
  name?: string;
  code?: string;
  jwt?: string;
}

export class Tenant implements ITenant {
  constructor(
    public id?: string,
    public code?: string,
    public name?: string,
    public jwt?: string
  ) {
  }
}
