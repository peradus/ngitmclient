import { Component, OnInit, Input } from '@angular/core';
import { IITMObject } from '../itmobject';
import { DataService } from '../../services/data.service';

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
