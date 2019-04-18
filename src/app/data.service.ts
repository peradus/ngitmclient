import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IITMObject,
         IITMObjectInstance,
         IITMObjectProperty,
         IITMObjectProperties,
         IITMObjectMethods,
         IITMObjectMethod,
         IITMObjectDataTable } from './itmobject';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  itmobjectData: IITMObjectDataTable = {};
  constructor(private http: HttpClient) {
    // ----------------------------------------------------------------------
    // base instance ''
    this.itmobjectData[''] = {
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
          'instance1': {},
          'instance2': {},
          'instance3': {}
        }
    };

    // ----------------------------------------------------------------------
    // instance 'instance1'
    this.itmobjectData['instance1'] = {
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
        'start': { name: 'start'},
        'sub': {
          name: 'sub',
          methods: {
            'one':   {
              name: 'No.1',
              methods: {
                'A':{ 'name': 'A' },
                'B':{ 'name': 'B' }
              }
            },
            'two':   { 'name': 'No.2' , methods:{} },
            'three': { 'name': 'No.3' , methods:{} },
            'four':  { 'name': 'No.4' , methods:{} }
          }
        }
      }
    };

    // ----------------------------------------------------------------------
    // instance 'instance2'
    this.itmobjectData['instance2'] = {
      name: 'instance2',
      className: 'ITMObjectClass',
      shortDescription: 'a short description',
      description: 'a long description'
    };

    // ----------------------------------------------------------------------
    // instance 'instance3'
    this.itmobjectData['instance3'] = {
      name: 'instance3',
      className: 'ITMObjectClass',
      shortDescription: 'a short description',
      description: 'a long description'
    };
  }

  getItmObject(instance: string): IITMObject | undefined {
    console.log('DataService: getItmObject() called, instance =[' + instance + ']');

    return this.itmobjectData[instance];
  }

  getItmObjectProperty(instance: string, property: string): IITMObjectProperty | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    return (itmobject.properties[property]);
  }

  getItmObjectProperties(instance: string): IITMObjectProperties | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    return itmobject.properties;
  }

  getItmObjectMethod(instance: string, method: string): IITMObjectMethod | undefined {
    let methodArr: string[] = method.split('/');
    let methodName: string ;

    methodName = methodArr[methodArr.length - 1];
    methodArr = methodArr.slice(0,methodArr.length - 1);

    const itmObjectMethods: IITMObjectMethods = this.getItmObjectMethods(instance, methodArr.join('/'));

    return (itmObjectMethods[methodName]);
  }

  getItmObjectMethods(instance: string, method: string = ''): IITMObjectMethods | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    let itmObjectMethods: IITMObjectMethods = itmobject.methods;

    if (method === '') {
      return itmObjectMethods;
    }
    // if sub methods specified, parse towards submethod
    // stop/server
    let methodArr = method.split('/');
    while (methodArr.length > 0) {
      itmObjectMethods = itmObjectMethods[ methodArr[0] ].methods;
      methodArr.shift();
    }

    // if assigned itmObjectMethod return its methods
    return itmObjectMethods;
  }

  getItmObjectInstances(instance: string): string[] {
    const itmobject: IITMObject = this.getItmObject(instance);
    const instances: string[] = Object.keys(itmobject.instances);
    instances.forEach(
      (instanceKey, index) => {
          if (instance === '') {
            // first instance, no leading '/'
            instances[index] = instanceKey;
          } else {
            instances[index] = instance + '/' + instanceKey;
          }
      }
    );
    console.log('dataservice.instances');
    console.dir(instances);
    return instances;
  }

}

