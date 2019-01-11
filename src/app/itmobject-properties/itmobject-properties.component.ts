import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectData } from '../itmobject';

@Component({
  selector: 'app-itmobject-properties',
  templateUrl: './itmobject-properties.component.html',
  styleUrls: ['./itmobject-properties.component.scss']
})
export class ItmobjectPropertiesComponent implements OnInit {
  @Input() itmobject: IITMObjectData;
  constructor() { }

  ngOnInit() {
  }

}
