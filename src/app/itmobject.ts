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
}

export interface IITMObjectMethods {
  [name: string]: IITMObjectMethod;
}

export interface IITMObjectData {
  name: string;
  className: string;
  shortDescription?: string;
  description?: string;
  methods?: IITMObjectMethods;
  properties?: IITMObjectProperties;
 }

export interface IITMObjectInstances {
  [name: string]: IITMObjectData;
}

export interface IITMObjectData {
  instances?: IITMObjectInstances;
}

export class Itmobject {
  constructor (public data: IITMObjectData) {
  }
}
