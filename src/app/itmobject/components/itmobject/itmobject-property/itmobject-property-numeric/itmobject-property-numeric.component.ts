import { Component, OnInit, Input } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { IITMObject } from '../../../../typedef/itmobject';
// tslint:disable-next-line:max-line-length
import { IITMObjectProperty } from '../../../../typedef/itmobject';
import { ItmClientService } from '../../../../../../app/data/services/itmclient.service';
import { ItmobjectPropertyStringComponent } from '../itmobject-property-string/itmobject-property-string.component';

@Component({
  selector: 'app-itmobject-property-numeric',
  templateUrl: './itmobject-property-numeric.component.html',
  styleUrls: ['./itmobject-property-numeric.component.scss']
})
export class ItmobjectPropertyNumericComponent extends ItmobjectPropertyStringComponent  {

  constructor(itmclientservice: ItmClientService) {
    super(itmclientservice);
   }

}
