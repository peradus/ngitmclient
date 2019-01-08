import { Component, OnInit } from '@angular/core';
import { ConfigurationService, ConfigurationData } from '../configuration.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private _configuration: ConfigurationService) { }

  ngOnInit() {
  }

  get data(): ConfigurationData {
    return this._configuration.data;
  }
}
