import { Component, OnInit } from '@angular/core';
import { IITMObjectData } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  itmobject: IITMObjectData;
  constructor(private dataservice: DataService) { }
    ngOnInit() {
      this.itmobject = this.dataservice.getItmObject();
  }


}
