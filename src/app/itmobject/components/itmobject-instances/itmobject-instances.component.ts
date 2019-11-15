import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../typedef/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-instances',
  templateUrl: './itmobject-instances.component.html',
  styleUrls: ['./itmobject-instances.component.scss']
})
export class ItmobjectInstancesComponent {
  @Input() itmobject: IITMObject;

  constructor(private itmclientservice: ItmClientService) { }

}
