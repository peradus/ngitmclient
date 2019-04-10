export interface IITMObjectProperty {
  displayName: string;
  hint?: string;
  description?: string;
  validator?: string;
  value: string;
}

export interface IITMObjectProperties {
    [name: string]: IITMObjectProperty;
}

export interface IITMObjectMethod {
  name: string;
  parameters?: IITMObjectProperties;
  methods?: IITMObjectMethods;
}

export interface IITMObjectMethods {
  [name: string]: IITMObjectMethod;
}

export interface IITMObject {
  name: string;
  className: string;
  shortDescription?: string;
  description?: string;
  methods?: IITMObjectMethods;
  properties?: IITMObjectProperties;
 }

export interface IITMObjectInstances {
  [name: string]: IITMObject | {};
}

export interface IITMObject {
  instances?: IITMObjectInstances;
}

export interface IITMObjectInstance {
  name: string;
}

export interface IITMObjectDataTable {
  [instance: string]: IITMObject;
}