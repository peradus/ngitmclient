import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IITMObjectData } from './itmobject';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  itmobject: IITMObjectData;
  constructor(private http: HttpClient) {
    this.itmobject = {
      name: 'anITMObject',
      className: 'ITMObjectClass',
      shortDescription: 'a short description',
      description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nec
       nisi ac vestibulum. Phasellus facilisis elit enim, eget convallis dui gravida quis. Pellentesque eu
        eros eget ligula hendrerit consectetur nec vitae sapien. Vivamus aliquam nec lorem in scelerisque.
         Suspendisse blandit luctus augue, a faucibus lectus tincidunt id. Aenean porttitor neque non
          pulvinar consectetur. Integer et elit non mauris blandit semper ut vel eros.`,
      methods: {
        'stop': { name: 'stop'},
        'start': { name: 'start'}
      },
      properties: {
        'testproperty' : {
          'displayName' : 'testproperty',
          'description' : 'this is a test property',
          'value' : '123'
        }
      },
      instances: {
        'instance1': {
          name: 'instance1',
          className: 'ITMObjectClass',
          shortDescription: 'a short description',
          description: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam mollis nec
          nisi ac vestibulum. Phasellus facilisis elit enim, eget convallis dui gravida quis. Pellentesque eu
            eros eget ligula hendrerit consectetur nec vitae sapien. Vivamus aliquam nec lorem in scelerisque.
            Suspendisse blandit luctus augue, a faucibus lectus tincidunt id. Aenean porttitor neque non
              pulvinar consectetur. Integer et elit non mauris blandit semper ut vel eros.`,
          methods: {
            'stop': { name: 'stop'},
            'start': { name: 'start'}
          }
        },
        'instance2': {
          name: 'instance2',
          className: 'ITMObjectClass',
          shortDescription: 'a short description',
          description: 'a long description'
        },
        'instance3':{
          name: 'instance3',
          className: 'ITMObjectClass',
          shortDescription: 'a short description',
          description: 'a long description'
        }
      }
    }
  }

  getItmObject(selectedInstance: string = ''): IITMObjectData {
    console.log('DataService: getItmObject() called, instance =[' + selectedInstance + ']');
    return this.itmobject;
  }
}

