import { Component, OnInit, Input } from '@angular/core';
import { Itmobject, IITMObjectData } from '../itmobject';

@Component({
  selector: 'app-itmobject',
  templateUrl: './itmobject.component.html',
  styleUrls: ['./itmobject.component.scss']
})
export class ItmobjectComponent implements OnInit {
  @Input() itmobject: IITMObjectData;
  constructor() { }

  ngOnInit() {
  }

}
