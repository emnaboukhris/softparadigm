export interface IProductFamily {
  id?: string;
  code?: string;
  name?: string;
  label?: string;
  description?: string;
  subfamilies?: IProductFamily[];
}

export class ProductFamily implements IProductFamily {
  constructor(
    public id?: string,
    public code?: string,
    public name?: string,
    public description?: string,
    public subfamilies?: IProductFamily[],
  ) {
  }
}
