import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../itmobject';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-itmobject-image',
  templateUrl: './itmobject-image.component.html',
  styleUrls: ['./itmobject-image.component.scss']
})
export class ItmobjectImageComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() instance: string;
  itmobject: IITMObject;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject(this.instance);
    console.log('width=');
    console.log(this.width);
    console.log('heighth=');
    console.log(this.height);
  }

}
