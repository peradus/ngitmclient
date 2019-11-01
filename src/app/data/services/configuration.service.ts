import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ConfigurationData {
  AppName: String;
  AppVersion: String;
  Debug: Boolean;
}

export class ConfigurationService {

  constructor() { }

  get data(): ConfigurationData {
    return {
      'AppName': 'ITMClient',
      'AppVersion': '0.1',
      'Debug': true
      };
  }

}

