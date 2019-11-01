import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectProperties } from '../../../type-definition/itmobject';

import { FormGroup, FormControl } from '@angular/forms';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-properties',
  templateUrl: './itmobject-properties.component.html',
  styleUrls: ['./itmobject-properties.component.scss']
})
export class ItmobjectPropertiesComponent implements OnInit {
  @Input() instance: string;
  properties: IITMObjectProperties;
  form: FormGroup = new FormGroup({});

  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
    this.properties = this.itmclientservice.getItmObjectProperties(this.instance);
  }
}
