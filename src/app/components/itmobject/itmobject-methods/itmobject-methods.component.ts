import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent {
  @Input() itmobject: IITMObject;

  constructor(private itmclientservice: ItmClientService) {
  }
}
