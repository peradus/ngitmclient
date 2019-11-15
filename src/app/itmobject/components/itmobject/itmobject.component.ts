import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../typedef/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject',
  templateUrl: './itmobject.component.html',
  styleUrls: ['./itmobject.component.scss']
})
export class ItmobjectComponent  {
  @Input() itmobject: IITMObject;
  constructor(private itmclientservice: ItmClientService) {
  }
}
