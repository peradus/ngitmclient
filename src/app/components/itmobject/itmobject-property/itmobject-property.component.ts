import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectProperty, IITMObject } from '../../../type-definition/itmobject';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';

import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-property',
  templateUrl: './itmobject-property.component.html',
  styleUrls: ['./itmobject-property.component.scss']
})
export class ItmobjectPropertyComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() itmobject: IITMObject ;
  @Input() property: IITMObjectProperty;
   control: FormControl = new FormControl(
    '',
    Validators.required
    );

    get name(): string {
      return this.property.name;
    }

  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
    // add form control
    this.form.addControl(
      this.name, this.control
    );
  }

  get value() { return this.property.value; }

}
