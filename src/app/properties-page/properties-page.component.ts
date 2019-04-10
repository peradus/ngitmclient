import { Component, OnInit } from '@angular/core';
import { IITMObject } from '../itmobject';
import { DataService } from '../data.service';

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
