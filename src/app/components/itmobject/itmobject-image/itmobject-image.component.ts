import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-image',
  templateUrl: './itmobject-image.component.html',
  styleUrls: ['./itmobject-image.component.scss']
})
export class ItmobjectImageComponent implements OnInit {
  @Input() width: string;
  @Input() height: string;
  @Input() instance: string;
  className: string;

  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
    this.className = this.itmclientservice.getInstanceClassName(this.instance);
    console.log('width=');
    console.log(this.width);
    console.log('heighth=');
    console.log(this.height);
  }

}
