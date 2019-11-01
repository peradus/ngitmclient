import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { TruncatePipe } from '../../../truncate.pipe';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-instance',
  templateUrl: './itmobject-instance.component.html',
  styleUrls: ['./itmobject-instance.component.scss']
})
export class ItmobjectInstanceComponent implements OnInit {
  @Input() instance: string;
  itmobject: IITMObject;
  shownDescription: string;
  constructor(private itmclientservice: ItmClientService, private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.itmobject = {
      name : this.itmclientservice.getInstanceName(this.instance),
      className : this.itmclientservice.getInstanceClassName(this.instance),
      shortDescription : this.itmclientservice.getInstanceShortDescription(this.instance),
      description : this.itmclientservice.getInstanceDescription(this.instance),
      status : this.itmclientservice.getInstanceDescription(this.instance)
    };
  }

  expandShownDescription() {
    this.shownDescription = this.itmobject.description;
  }

}
