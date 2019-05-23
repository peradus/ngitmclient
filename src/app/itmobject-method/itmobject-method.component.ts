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
  @Input() methodName: string;
  method: IITMObjectMethod;

  get baseMethod(): string  {
    if (this.methodName !== '') {
      return this.methodName + '/';
    } else {
      return '';
    }
  }

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.method = this.dataservice.getItmObjectMethod(this.instance, this.methodName);
  }

}
