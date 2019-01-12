import { Component, OnInit, Input } from '@angular/core';
import { Itmobject, IITMObjectProperty } from '../itmobject';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';

@Component({
  selector: 'app-itmobject-property',
  templateUrl: './itmobject-property.component.html',
  styleUrls: ['./itmobject-property.component.scss']
})
export class ItmobjectPropertyComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() property: IITMObjectProperty;
  @Input() propertyName: string;
  control: FormControl = new FormControl(
    '',
    Validators.required
    );

  constructor() { }

  ngOnInit() {
    this.form.addControl(this.propertyName, this.control
    );
    console.dir(this.property);
  }

  get value() { return this.property.value; }

}
