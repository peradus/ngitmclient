import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../typedef/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent {
  @Input() itmobject: IITMObject;
  busy = false;
  constructor(private itmclientservice: ItmClientService) {
  }

  doNethod( name, itmobject) {
    this.itmclientservice.doItmObjectMethod('abc', name);
  }
}
