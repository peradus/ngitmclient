import { Component, OnInit, Input } from '@angular/core';
import { DataService } from '../../../data/services/data.service';
import { IITMObjectMethod } from '../../../type-definition/itmobject';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent implements OnInit {
  @Input() instance: string;
  methods: IITMObjectMethod[];

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.methods = this.dataservice.getItmObjectMethods(this.instance);

  }

}
