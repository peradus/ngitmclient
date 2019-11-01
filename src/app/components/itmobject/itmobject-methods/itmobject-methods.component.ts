import { Component, OnInit, Input } from '@angular/core';
import { IITMObjectMethods } from '../../../type-definition/itmobject';
import { ItmClientService } from '../../../data/services/itmclient.service';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent implements OnInit {
  @Input() instance: string;
  methods: IITMObjectMethods;

  constructor(private itmclientservice: ItmClientService) {
  }

  ngOnInit() {
    this.methods = this.itmclientservice.getItmObjectMethods(this.instance);
  }
}
