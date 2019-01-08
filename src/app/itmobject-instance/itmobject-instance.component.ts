import { Component, OnInit, Input } from '@angular/core';
import { Itmobject, IITMObjectData } from '../itmobject';
import { TruncatePipe } from '../truncate.pipe';

@Component({
  selector: 'app-itmobject-instance',
  templateUrl: './itmobject-instance.component.html',
  styleUrls: ['./itmobject-instance.component.scss']
})
export class ItmobjectInstanceComponent implements OnInit {
  @Input() itmobject: IITMObjectData;
  shownDescription: string;
  constructor(private truncatePipe: TruncatePipe) { }

  ngOnInit() {
    // use truncate pipe directly from code, is defined as provider in app.module.ts
    this.shownDescription = this.truncatePipe.transform(this.itmobject.description);
  }

  expandShownDescription() {
    this.shownDescription = this.itmobject.description;
  }

}
