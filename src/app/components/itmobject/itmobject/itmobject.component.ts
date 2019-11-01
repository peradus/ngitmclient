import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject',
  templateUrl: './itmobject.component.html',
  styleUrls: ['./itmobject.component.scss']
})
export class ItmobjectComponent implements OnInit {
  @Input() instance: string;
  itmobject: IITMObject;
  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
    this.itmobject = {
      name : this.itmclientservice.getInstanceName(this.instance),
      className : this.itmclientservice.getInstanceClassName(this.instance),
      shortDescription : this.itmclientservice.getInstanceShortDescription(this.instance),
      description : this.itmclientservice.getInstanceDescription(this.instance),
      status : this.itmclientservice.getInstanceDescription(this.instance)
    }

  }

}
