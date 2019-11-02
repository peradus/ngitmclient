import { Injectable } from '@angular/core';
import { IITMObject, ItmObject } from '../../../app/type-definition/itmobject';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItmClientService {
  url = 'http://127.0.0.1:3000/itmobjects/5daa2a415cc33013cc16eb74';

  itmObject: IITMObject;
  constructor(private http: HttpClient)  {

    this.itmObject = {
      name: 'anITMObject',
        className: 'ITMObjectClass',
        displayName: 'a short description',
        description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nec
        nisi ac vestibulum. Phasellus facilisis elit enim, eget convallis dui gravida quis. Pellentesque eu
          eros eget ligula hendrerit consectetur nec vitae sapien. Vivamus aliquam nec lorem in scelerisque.
          Suspendisse blandit luctus augue, a faucibus lectus tincidunt id. Aenean porttitor neque non
            pulvinar consectetur. Integer et elit non mauris blandit semper ut vel eros.`,
        methods: [
          {
            name: 'stop'
          },
          {
            name: 'start'
          }
        ],
        properties: [
          {
            'name' : 'testproperty',
            'description' : 'this is a test property',
            'value' : '123'
          },
          {
            'name' : 'testproperty2',
            'description' : 'this is a test property2',
            'value' : '123'
          },
          {
            'name' : 'testproperty3',
            'description' : 'this is a test property3',
            'value' : '123'
          },
          {
            'name' : 'testproperty4',
            'description' : 'this is a test property4',
            'value' : '123'
          }
        ],
        instances: [
          {
            name: 'instance1'
          },
          {
            name: 'instance2'
          }
        ]
      };
  }

  getItmObject(instance: string) {
    console.log('getItmObject called for instance: ', instance);
    // if (instance === '') {
//      return this.itmObject;
      return this.http.get<IITMObject>(this.url);

    // } else { return undefined; }
  }
}


