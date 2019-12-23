import { Injectable } from '@angular/core';
import { IITMObject, ItmObject } from '../../itmobject/typedef/itmobject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItmClientService {
  url = 'http://127.0.0.1:3000/itmobjects/5daa2a415cc33013cc16eb74';

  itmObject: IITMObject;
  constructor(private http: HttpClient)  {
  }

  getItmObject(instance: string) {
    console.log('getItmObject called for instance: ', instance);
    // if (instance === '') {
//      return this.itmObject;
      return this.http.get<IITMObject>(this.url);

    // } else { return undefined; }
  }
}


