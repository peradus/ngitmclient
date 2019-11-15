import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../itmobject/typedef/itmobject';
import { ItmClientService } from '../../data/services/itmclient.service';


@Component({
  selector: 'app-instances-page',
  templateUrl: './instances-page.component.html',
  styleUrls: ['./instances-page.component.scss']
})
export class InstancesPageComponent implements OnInit {
  itmObject$: IITMObject;
  selectedInstance = '';
  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
    return this.itmclientservice.getItmObject(this.selectedInstance)
      .subscribe(data => { this.itmObject$ = data; console.dir(data)});
}

}
