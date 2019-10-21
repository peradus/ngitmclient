import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../itmobject';
import { TruncatePipe } from '../truncate.pipe';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-itmobject-instance',
  templateUrl: './itmobject-instance.component.html',
  styleUrls: ['./itmobject-instance.component.scss']
})
export class ItmobjectInstanceComponent implements OnInit {
  @Input() instance: string;
  itmobject: IITMObject;
  shownDescription: string;
  constructor(private dataservice: DataService, private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject(this.instance);
    // use truncate pipe directly from code, is defined as provider in app.module.ts
    this.shownDescription = this.truncatePipe.transform(this.itmobject.description);
  }

  expandShownDescription() {
    this.shownDescription = this.itmobject.description;
  }

}
