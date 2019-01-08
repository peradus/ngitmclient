export interface IITMObjectProperty {
  description: string;
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
  shortDescription: string;
  description: string;
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
  //  this.name = 'anITMObject';
  //  this.className = 'ITMObjectClass';
  //  this.shortDescription = 'This is an short description';
  //  this.description = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean volutpat bibendum egestas.
  //  Vestibulum imperdiet consectetur nibh, bibendum tristique tellus ornare et. Cras at mi vel sem rutrum placerat.
  //  Suspendisse maximus tincidunt scelerisque. Sed eget placerat magna. Fusce egestas, felis vitae pharetra tempor,
  //  enim diam finibus diam, nec euismod nunc neque eu leo. Duis bibendum facilisis rhoncus.
  //  Vivamus nulla ipsum, feugiat quis sollicitudin id, mollis eu nisl. Interdum et malesuada fames ac ante ipsum primis in faucibus.
  //  Vestibulum accumsan quam at rhoncus finibus. Quisque purus velit, tincidunt in risus aliquet, eleifend venenatis arcu. `;
  }
}
