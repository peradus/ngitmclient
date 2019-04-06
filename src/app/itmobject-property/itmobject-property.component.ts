import { Component, OnInit, Input } from '@angular/core';
import { Itmobject, IITMObjectProperty } from '../itmobject';
import { FormGroup, FormControl, Validators, FormControlName } from '@angular/forms';
import { formArrayNameProvider } from '@angular/forms/src/directives/reactive_directives/form_group_name';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itmobject-property',
  templateUrl: './itmobject-property.component.html',
  styleUrls: ['./itmobject-property.component.scss']
})
export class ItmobjectPropertyComponent implements OnInit {
  @Input() form: FormGroup;
  @Input() instance:string= '';
  @Input() propertyName:string = '';
  property: IITMObjectProperty;
   control: FormControl = new FormControl(
    '',
    Validators.required
    );

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // load property
    this.property = this.dataservice.getItmObjectProperty(this.instance, this.propertyName);

    // add form control
    this.form.addControl(
      this.propertyName, this.control
    );
  }

  get value() { return this.property.value; }

}
