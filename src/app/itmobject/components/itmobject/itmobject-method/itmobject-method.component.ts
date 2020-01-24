import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IITMObjectMethod, IITMObject } from '../../../typedef/itmobject';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItmClientService } from '../../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-method',
  templateUrl: './itmobject-method.component.html',
  styleUrls: ['./itmobject-method.component.scss']
})

export class ItmobjectMethodComponent implements OnInit {
  @Input() itmobject: IITMObject;
  @Input() method: IITMObjectMethod;
  @ViewChild('childMenu', {static: true}) public childMenu;

  closeResult: string;
  constructor(private itmclientservice: ItmClientService) {}

  ngOnInit() {
  }

  doMethod( itmobject, amethod) {
    alert('itmobject-method.doMethod(): ' + JSON.stringify(amethod));
    this.itmclientservice.doItmObjectMethod('abc', name);
  }
}
