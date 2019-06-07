import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectMethod } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itmobject-method',
  templateUrl: './itmobject-method.component.html',
  styleUrls: ['./itmobject-method.component.scss']
})
export class ItmobjectMethodComponent implements OnInit {
  @Input() instance: string;
  @Input() method: IITMObjectMethod;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }
}
