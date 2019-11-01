import { Injectable, OnInit } from '@angular/core';
import { IITMObject, IITMObjectMethods, IITMObjectInstances, IITMObjectProperties } from '../../../app/type-definition/itmobject';

@Injectable({
  providedIn: 'root'
})
export class ItmClientService {
  selectedInstance: String = '';
  itmObject: IITMObject;
  constructor()  {

    this.itmObject = {
      name: 'anITMObject',
        className: 'ITMObjectClass',
        shortDescription: 'a short description',
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

  getInstanceName(instance: string): string {
    if (instance === '') {
      return this.itmObject.name;
    } else { return ''; }
  }

  getInstanceClassName(instance: string): string {
    if (instance === '') {
      return this.itmObject.className;
    } else { return ''; }
  }

  getInstanceDescription(instance: string): string {
    if (instance === '') {
      return this.itmObject.description;
    } else { return ''; }
  }

  getInstanceShortDescription(instance: string): string {
    if (instance === '') {
      return this.itmObject.shortDescription;
    } else { return ''; }
  }

  getInstanceStatus(instance: string): string {
    if (instance === '') {
      return this.itmObject.status;
    } else { return ''; }
  }

  getItmObjectMethods(instance: string): IITMObjectMethods {
    if (instance === '') {
      return this.itmObject.methods;
    } else { return []; }
  }

  getItmObjectInstances(instance: string): IITMObjectInstances {
    if (instance === '') {
      return this.itmObject.instances;
    } else { return []; }
  }

  getItmObjectProperties(instance: string): IITMObjectProperties {
    if (instance === '') {
      return this.itmObject.properties;
    } else { return []; }
  }
}


