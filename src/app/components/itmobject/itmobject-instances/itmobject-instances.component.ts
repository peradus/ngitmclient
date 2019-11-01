import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectInstances } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-instances',
  templateUrl: './itmobject-instances.component.html',
  styleUrls: ['./itmobject-instances.component.scss']
})
export class ItmobjectInstancesComponent implements OnInit {
  @Input() instance: string;
  instances: IITMObjectInstances;

  get baseInstance(): string {
    if (this.instance !== '') { return this.instance + '/'; }
    return '';
  }
  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
      this.instances = this.itmclientservice.getItmObjectInstances(this.instance);
  }
}
