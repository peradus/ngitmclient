import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-image',
  templateUrl: './itmobject-image.component.html',
  styleUrls: ['./itmobject-image.component.scss']
})
export class ItmobjectImageComponent {
  @Input() width: string;
  @Input() height: string;
  @Input() itmobject: IITMObject;

  constructor(private itmclientservice: ItmClientService) { }

}
