import { Component, OnInit, Input } from '@angular/core';
import { Itmobject, IITMObjectInstance, IITMObjectData } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itmobject',
  templateUrl: './itmobject.component.html',
  styleUrls: ['./itmobject.component.scss']
})
export class ItmobjectComponent implements OnInit {
  @Input() instance: string;
  itmobject: IITMObjectData;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject(this.instance);

  }

}
