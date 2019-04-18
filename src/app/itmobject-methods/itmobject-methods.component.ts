import { Component, OnInit, Input } from '@angular/core';
import { IITMObject, IITMObjectMethods } from '../itmobject';
import { DataService } from '../data.service';

@Component({
  selector: 'app-itmobject-methods',
  templateUrl: './itmobject-methods.component.html',
  styleUrls: ['./itmobject-methods.component.scss']
})
export class ItmobjectMethodsComponent implements OnInit {
  @Input() instance: string;
  @Input() method = '';
  methods: IITMObjectMethods;

  constructor(private dataservice: DataService) { }

  ngOnInit() {
    this.methods = this.dataservice.getItmObjectMethods(this.instance, this.method);
  }

}
