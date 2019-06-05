import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfigurationService } from './configuration.service';
import { ItmobjectComponent } from './itmobject/itmobject.component';
import { ItmobjectInstanceComponent } from './itmobject-instance/itmobject-instance.component';
import { ItmobjectInstancesComponent } from './itmobject-instances/itmobject-instances.component';
import { ItmobjectMethodsComponent } from './itmobject-methods/itmobject-methods.component';
import { ItmobjectMethodComponent } from './itmobject-method/itmobject-method.component';
import { TruncatePipe } from './truncate.pipe';
import { InstancesPageComponent } from './instances-page/instances-page.component';
import { LogService } from './log.service';
import { PropertiesPageComponent } from './properties-page/properties-page.component';
import { ItmobjectPropertyComponent } from './itmobject-property/itmobject-property.component';
import { ItmobjectPropertiesComponent } from './itmobject-properties/itmobject-properties.component';
import { CommonModule } from '@angular/common';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

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
    ItmobjectPropertiesComponent
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
    ConfigurationService,
    LogService,
    TruncatePipe
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }
