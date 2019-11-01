import { Component, OnInit } from '@angular/core';
import { IITMObject } from '../../../app/type-definition/itmobject';
import { DataService } from '../../data/services/data.service';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})

export class PropertiesPageComponent implements OnInit {
  constructor(private dataservice: DataService) { }

  ngOnInit() {
  }
}
