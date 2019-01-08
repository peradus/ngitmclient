import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectData } from '../itmobject';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent implements OnInit {
  @Input() itmobject: IITMObjectData;

  constructor() { }

  ngOnInit() {
  }

}
