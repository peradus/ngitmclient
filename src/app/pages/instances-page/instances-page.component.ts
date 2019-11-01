import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../../../app/type-definition/itmobject';
import { DataService } from '../../data/services/data.service';

@Component({
  selector: 'app-instances-page',
  templateUrl: './instances-page.component.html',
  styleUrls: ['./instances-page.component.scss']
})
export class InstancesPageComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

}
