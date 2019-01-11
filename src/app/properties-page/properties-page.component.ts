import { Component, OnInit } from '@angular/core';
import { IITMObjectData } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})
export class PropertiesPageComponent implements OnInit {
  itmobject: IITMObjectData;
  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.itmobject = this.dataservice.getItmObject();
  }

}
