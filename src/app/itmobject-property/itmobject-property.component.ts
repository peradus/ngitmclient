import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectProperty } from '../itmobject';
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
  @Input() instance: string ;
  @Input() property: IITMObjectProperty;
   control: FormControl = new FormControl(
    '',
    Validators.required
    );

    get name(): string {
      return this.property.name;
    }

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    // add form control
    this.form.addControl(
      this.name, this.control
    );
  }

  get value() { return this.property.value; }

}
