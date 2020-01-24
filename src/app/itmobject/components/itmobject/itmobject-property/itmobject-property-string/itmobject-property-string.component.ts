import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IITMObject } from '../../../../typedef/itmobject';
// tslint:disable-next-line:max-line-length
import { IITMObjectProperty } from '../../../../typedef/itmobject';
import { ItmClientService } from '../../../../../../app/data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-property-string',
  templateUrl: './itmobject-property-string.component.html',
  styleUrls: ['./itmobject-property-string.component.scss']
})
export class ItmobjectPropertyStringComponent implements OnInit {
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

}
