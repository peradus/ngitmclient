import { Component, OnInit, Input } from '@angular/core';
import { IITMObject, IITMObjectProperties } from '../itmobject';
import { FormGroup, FormControl } from '@angular/forms';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itmobject-properties',
  templateUrl: './itmobject-properties.component.html',
  styleUrls: ['./itmobject-properties.component.scss']
})
export class ItmobjectPropertiesComponent implements OnInit {
  @Input() instance: string;
  properties: IITMObjectProperties;
  form: FormGroup = new FormGroup({});

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.properties = this.dataservice.getItmObjectProperties(this.instance);
  }
}
