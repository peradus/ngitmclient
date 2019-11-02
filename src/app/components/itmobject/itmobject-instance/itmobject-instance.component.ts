import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { TruncatePipe } from '../../../truncate.pipe';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-instance',
  templateUrl: './itmobject-instance.component.html',
  styleUrls: ['./itmobject-instance.component.scss']
})
export class ItmobjectInstanceComponent {
  @Input() itmobject: IITMObject;
  shownDescription: string;
  constructor(private itmclientservice: ItmClientService, private truncatePipe: TruncatePipe) { 
  }

  expandShownDescription() {
    this.shownDescription = this.itmobject.description;
  }

}
