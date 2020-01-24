import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectProperties, IITMObject } from '../../../typedef/itmobject';

import { FormGroup, FormControl } from '@angular/forms';
import { ItmClientService } from '../../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-properties',
  templateUrl: './itmobject-properties.component.html',
  styleUrls: ['./itmobject-properties.component.scss']
})
export class ItmobjectPropertiesComponent {
  @Input() itmobject: IITMObject;
  properties: IITMObjectProperties;
  form: FormGroup = new FormGroup({});

  constructor(private itmclientservice: ItmClientService) {

  }

}
