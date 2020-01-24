import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { NgModule } from '@angular/core';
import { NgbModule, NgbCheckBox} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ConfigurationService } from '../app/data/services/configuration.service';
import { TruncatePipe } from './truncate.pipe';
import { InstancesPageComponent } from './pages/instances/instances-page.component';
import { LogService } from '../app/data/services/log.service';
import { PropertiesPageComponent } from './pages/properties/properties-page.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { PropertiesDialogComponent } from './components/itmobject/properties-dialog/properties-dialog.component';
import { ModalDialogComponent } from './components/test/modal-dialog/modal-dialog.component';
import { ItmClientService } from './data/services/itmclient.service';
import { ItmobjectModule } from './itmobject/itmobject.module';
import { MaterialModule } from './material/material.module';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    TruncatePipe,
    InstancesPageComponent,
    PropertiesPageComponent,
    PropertiesDialogComponent,
    ModalDialogComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule,
    ItmobjectModule,
    MaterialModule
  ],
  providers: [
    ItmClientService,
    ConfigurationService,
    LogService,
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
