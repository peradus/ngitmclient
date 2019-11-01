import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectMethod } from '../../../type-definition/itmobject';

import { DataService } from '../../../data/services/data.service';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-itmobject-method',
  templateUrl: './itmobject-method.component.html',
  styleUrls: ['./itmobject-method.component.scss']
})

export class ItmobjectMethodComponent implements OnInit {
  @Input() instance: string;
  @Input() method: IITMObjectMethod;
  closeResult: string;
  constructor(private dataservice: DataService, private modalService: NgbModal) {}

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
