import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { IITMObjectMethod, IITMObject } from '../../typedef/itmobject';

import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ItmClientService } from '../../../data/services/itmclient.service';

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
  constructor(private itmclientservice: ItmClientService, private modalService: NgbModal) {}

  ngOnInit() {
  }

  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }
}