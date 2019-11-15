
export interface IITMObjectProperty {
  name: string;
  displayName?: string;
  hint?: string;
  description?: string;
  validator?: string;
  datatype?: string;
  value: string;
}

export interface IITMObjectMethod {
  name: string;
  displayName?: string;
  properties?: IITMObjectProperties;
  methods?: IITMObjectMethods;
}

export interface IITMObjectMethods extends Array<IITMObjectMethod> { }
// export type IITMObjectMethods = Array<IITMObjectMethod>;

export interface IITMObjectInstances extends Array<IITMObject> { }
// export type IITMObjectInstances = Array<IITMObject>;

export interface IITMObjectProperties extends Array<IITMObjectProperty> { }
// export type IITMObjectProperties = Array<IITMObjectProperty>;

export interface IITMObject {
  name: string;
  className?: string;
  displayName?: string;
  description?: string;
  status?: string;
  methods?: IITMObjectMethods;
  properties?: IITMObjectProperties;
  instances?: IITMObjectInstances;
 }

export interface IITMObjectDataTable {
  [instance: string]: IITMObject;
}

export class ItmObject implements IITMObject {
  name: string;
}
