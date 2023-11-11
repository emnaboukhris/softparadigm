import {Tenant} from "./tenant.model";

export interface ICustomTenant {
  tenantDTO?: Tenant;
  managedUserVM?: any;
  productFamilyId?: string;
}

export class CustomTenant implements ICustomTenant {
  constructor(
    public tenantDTO?: Tenant,
    public managedUserVM?: any,
    public productFamilyId?: string
  ) {
  }
}
