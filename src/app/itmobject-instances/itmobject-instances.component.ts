import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../itmobject';
import { DataService } from '../data.service';


@Component({
  selector: 'app-itmobject-instances',
  templateUrl: './itmobject-instances.component.html',
  styleUrls: ['./itmobject-instances.component.scss']
})
export class ItmobjectInstancesComponent implements OnInit {
  @Input() instance: string;
  instances: IITMObject[];

  get baseInstance(): string {
    if (this.instance !== '') { return this.instance + '/'; }
    return '';
  }
  constructor(private dataservice: DataService) { }

  ngOnInit() {
      this.instances = this.dataservice.getItmObjectInstances(this.instance);
  }
}
