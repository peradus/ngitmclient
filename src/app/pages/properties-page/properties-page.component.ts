import { Component, OnInit } from '@angular/core';
import { ItmClientService } from '../../data/services/itmclient.service';

@Component({
  selector: 'app-properties-page',
  templateUrl: './properties-page.component.html',
  styleUrls: ['./properties-page.component.scss']
})

export class PropertiesPageComponent implements OnInit {
  constructor(private itmclientservice: ItmClientService) { }

  ngOnInit() {
  }
}
