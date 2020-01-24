import { Injectable } from '@angular/core';
import { IITMObject, ItmObject } from '../../itmobject/typedef/itmobject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItmClientService {
  url = 'http://127.0.0.1:3000/itmobjects/5daa2a415cc33013cc16eb74';
  busy = true;
  constructor(private http: HttpClient)  {
  }

  // routing through urls
  // https://stackoverflow.com/questions/51024982/how-to-create-a-url-string-with-query-parameters-from-an-object-in-angular-5
   getItmObject(instance: string) {
    const itmObject = this.http.get<IITMObject>(this.url);
    return itmObject;
  }

  doItmObjectMethod(instance: string, method: string) {
    console.log('doItmObjectMethod: instance=[' + instance + ' ] method=[' + method + ']');
  }
}


