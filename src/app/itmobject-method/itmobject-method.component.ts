import { Component, OnInit, Input } from '@angular/core';
import { Itmobject } from '../itmobject';

@Component({
  selector: 'app-itmobject-method',
  templateUrl: './itmobject-method.component.html',
  styleUrls: ['./itmobject-method.component.scss']
})
export class ItmobjectMethodComponent implements OnInit {
  @Input() itmobject: Itmobject;
  @Input() method: string;
  constructor() { }

  ngOnInit() {
  }

}
