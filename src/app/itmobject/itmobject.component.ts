import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../itmobject';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-itmobject',
  templateUrl: './itmobject.component.html',
  styleUrls: ['./itmobject.component.scss']
})
export class ItmobjectComponent implements OnInit {
  @Input() instance: string;
  itmobject: IITMObject;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject(this.instance);

  }

}
