export interface IITMObjectProperty {
  name: string;
  displayName?: string;
  hint?: string;
  description?: string;
  validator?: string;
  value: string;
}

export interface IITMObjectMethod {
  name: string;
  displayName?: string;
  properties?: IITMObjectProperty[];
  methods?: IITMObjectMethod[];
}

export interface IITMObject {
  name: string;
  className?: string;
  shortDescription?: string;
  description?: string;
  methods?: IITMObjectMethod[];
  properties?: IITMObjectProperty[];
  instances?: IITMObject[];
 }

export interface IITMObjectDataTable {
  [instance: string]: IITMObject;
}