import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IITMObjectData, IITMObjectInstance, IITMObjectProperty, IITMObjectProperties, IITMObjectMethods, IITMObjectMethod } from './itmobject';

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
        },
        'testproperty2' : {
          'displayName' : 'testproperty2',
          'description' : 'this is a test property2',
          'value' : '123'
        },
        'testproperty3' : {
          'displayName' : 'testproperty3',
          'description' : 'this is a test property3',
          'value' : '123'
        },
        'testproperty4' : {
          'displayName' : 'testproperty4',
          'description' : 'this is a test property4',
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
        'instance3': {
          name: 'instance3',
          className: 'ITMObjectClass',
          shortDescription: 'a short description',
          description: 'a long description'
        }
      }
    };
  }

  getItmObject(instance: string): IITMObjectData {
    console.log('DataService: getItmObject() called, instance =[' + instance + ']');
    return this.itmobject;
  }

  getItmObjectProperty(instance: string, property: string): IITMObjectProperty | undefined {
    const itmobject: IITMObjectData = this.getItmObject(instance);
    return (itmobject.properties[property]);
  }

  getItmObjectProperties(instance: string): IITMObjectProperties | undefined {
    const itmobject: IITMObjectData = this.getItmObject(instance);
    return itmobject.properties;
  }

  getItmObjectMethod(instance: string, method: string): IITMObjectMethod | undefined {
    const itmobject: IITMObjectData = this.getItmObject(instance);
    return (itmobject.methods[method]);
  }

  getItmObjectMethods(instance: string): IITMObjectMethods | undefined {
    const itmobject: IITMObjectData = this.getItmObject(instance);
    return itmobject.methods;
  }

  getItmObjectInstances(instance: string): string[] {
    const itmobject: IITMObjectData = this.getItmObject(instance);
    let instances: string[]= Object.keys(itmobject.instances);
    instances.forEach(
      (instanceKey,index)=>{
          instances[index] = instance + '/' + instanceKey;
      }
    )
    console.log('dataservice.instances');
    console.dir(instances);
    return instances;
  }

}

