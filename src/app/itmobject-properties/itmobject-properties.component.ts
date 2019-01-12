import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectData, IITMObjectProperties } from '../itmobject';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-itmobject-properties',
  templateUrl: './itmobject-properties.component.html',
  styleUrls: ['./itmobject-properties.component.scss']
})
export class ItmobjectPropertiesComponent implements OnInit {
  @Input() properties: IITMObjectProperties;
  form: FormGroup = new FormGroup({});

  constructor() { }

  ngOnInit() {

  }
}
