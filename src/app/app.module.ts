import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationService } from '../app/data/services/configuration.service';
import { ItmobjectComponent } from './components/itmobject/itmobject/itmobject.component';
import { ItmobjectInstanceComponent } from './components/itmobject/itmobject-instance/itmobject-instance.component';
import { ItmobjectInstancesComponent } from './components/itmobject/itmobject-instances/itmobject-instances.component';
import { ItmobjectMethodsComponent } from './components/itmobject/itmobject-methods/itmobject-methods.component';
import { ItmobjectMethodComponent } from './components/itmobject/itmobject-method/itmobject-method.component';
import { TruncatePipe } from './truncate.pipe';
import { InstancesPageComponent } from './pages/instances-page/instances-page.component';
import { LogService } from '../app/data/services/log.service';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';
import { ItmobjectPropertyComponent } from './components/itmobject/itmobject-property/itmobject-property.component';
import { ItmobjectPropertiesComponent } from './components/itmobject/itmobject-properties/itmobject-properties.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';
import { ItmobjectImageComponent } from './components/itmobject/itmobject-image/itmobject-image.component';
import { PropertiesDialogComponent } from './components/itmobject/properties-dialog/properties-dialog.component';
import { ModalDialogComponent } from './components/test/modal-dialog/modal-dialog.component';
import { ItmClientService } from './data/services/itmclient.service';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    AboutComponent,
    HomeComponent,
    ItmobjectComponent,
    ItmobjectInstanceComponent,
    ItmobjectInstancesComponent,
    ItmobjectMethodsComponent,
    ItmobjectMethodComponent,
    TruncatePipe,
    InstancesPageComponent,
    PropertiesPageComponent,
    ItmobjectPropertyComponent,
    ItmobjectPropertiesComponent,
    ItmobjectImageComponent,
    PropertiesDialogComponent,
    ModalDialogComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFontAwesomeModule
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
