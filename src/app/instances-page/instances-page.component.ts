import { Component, OnInit } from '@angular/core';
import { IITMObjectData } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-instances-page',
  templateUrl: './instances-page.component.html',
  styleUrls: ['./instances-page.component.scss']
})
export class InstancesPageComponent implements OnInit {
  itmobject: IITMObjectData;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject();
  }

}
