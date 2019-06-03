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

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.method = this.dataservice.getItmObjectMethod(this.instance, this.methodName);

    console.log('Method [' + this.methodName + ']');
    console.dir(this.method);
  }

}
