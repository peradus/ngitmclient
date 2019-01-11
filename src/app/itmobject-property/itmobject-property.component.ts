import { Component, OnInit, Input } from '@angular/core';
import { Itmobject } from '../itmobject';

@Component({
  selector: 'app-itmobject-property',
  templateUrl: './itmobject-property.component.html',
  styleUrls: ['./itmobject-property.component.scss']
})
export class ItmobjectPropertyComponent implements OnInit {
  @Input() itmobject: Itmobject;
  @Input() property: string;
  constructor() { }

  ngOnInit() {
  }

}
