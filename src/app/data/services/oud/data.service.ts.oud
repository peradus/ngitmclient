import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IITMObject,
         IITMObjectMethod,
         IITMObjectMethods,
         IITMObjectProperty,
         IITMObjectProperties,
         IITMObjectDataTable } from '../../../type-definition/itmobject';

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
      methods: [
        {
          name: 'stop'
        },
        {
          name: 'start'
        },
        {
          name: 'sub',
          methods: [
            {
              name: 'one',
              properties: [
                {
                  'name' : 'testproperty',
                  'description' : 'this is a test property',
                  'value' : '123',
                  'datatype' : 'text'
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
              ]
            },
            {
                name: 'Two'
            },
            {
                name: 'Three'
            },
            {
                name: 'Four'
            }
          ]
        }
      ]
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

  topInstance(instance: string): string {
    const i = instance.indexOf('/');
    if (i === -1) { // no separator, return full string
      return instance;
    } else { // return text till separator
      return instance.substr(0, i);
    }
  }

  takeTopInstance(instance: string): string {
    const i = instance.indexOf('/');
    if (i === -1) { // no separator, return full string
      return '' ;
    } else { // remove text till separator
      return instance.substr(i + 1);
    }
  }

  getItmObject(instance: string): IITMObject | undefined {
    console.log('DataService: getItmObject() called, instance =[' + instance + ']');
    if (this.itmobjectData[instance]) { return this.itmobjectData[instance]; }
    return { name: 'undefined'};
  }

  getItmObjectProperty(instance: string, property: string): IITMObjectProperty | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    return (itmobject.properties[property]);
  }

  getItmObjectProperties(instance: string): IITMObjectProperties | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    return itmobject.properties;
  }

  getItmObjectMethods(instance: string): IITMObjectMethod[] {
    const itmobject: IITMObject = this.getItmObject(instance);
    if (itmobject.methods) { return itmobject.methods; }
    return [];
  }

  getItmObjectInstances(instance: string): IITMObject[] | undefined {
    const itmobject: IITMObject = this.getItmObject(instance);
    const instances: IITMObject[] =  itmobject.instances;
    return instances;
  }

}

