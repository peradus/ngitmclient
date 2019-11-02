import { Component, OnInit } from '@angular/core';
import { ItmClientService } from '../../data/services/itmclient.service';
import { IITMObject } from '../../../app/type-definition/itmobject';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itmObject$: IITMObject;
  selectedInstance = '';
  constructor(private itmclientservice: ItmClientService)  {
   }
    ngOnInit() {
      return this.itmclientservice.getItmObject(this.selectedInstance)
        .subscribe(data => { this.itmObject$ = data; console.dir(data)});
  }


}
