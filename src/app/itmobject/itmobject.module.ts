import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItmobjectImageComponent } from './components/itmobject/itmobject-image/itmobject-image.component';
import { ItmobjectInstanceComponent } from './components/itmobject/itmobject-instance/itmobject-instance.component';
import { ItmobjectInstancesComponent } from './components/itmobject/itmobject-instances/itmobject-instances.component';
import { ItmobjectMethodComponent } from './components/itmobject/itmobject-method/itmobject-method.component';
import { ItmobjectMethodsComponent } from './components/itmobject/itmobject-methods/itmobject-methods.component';
import { ItmobjectPropertiesComponent } from './components/itmobject/itmobject-properties/itmobject-properties.component';
import { ItmobjectPropertyComponent } from './components/itmobject/itmobject-property/itmobject-property.component';
import { ItmobjectComponent } from './components/itmobject/itmobject.component';
import { MaterialModule } from '../material/material.module';
// tslint:disable-next-line:max-line-length
import { ItmobjectPropertyStringComponent } from './components/itmobject/itmobject-property/itmobject-property-string/itmobject-property-string.component';
// tslint:disable-next-line:max-line-length
import { ItmobjectPropertyNumericComponent } from './components/itmobject/itmobject-property/itmobject-property-numeric/itmobject-property-numeric.component';


@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ItmobjectComponent,
    ItmobjectInstanceComponent,
    ItmobjectInstancesComponent,
    ItmobjectMethodsComponent,
    ItmobjectMethodComponent,
    ItmobjectPropertyComponent,
    ItmobjectPropertyStringComponent,
    ItmobjectPropertyNumericComponent,
    ItmobjectPropertiesComponent,
    ItmobjectImageComponent
  ],
  exports: [
    ItmobjectComponent,
    ItmobjectInstanceComponent,
    ItmobjectInstancesComponent,
    ItmobjectMethodsComponent,
    ItmobjectMethodComponent,
    ItmobjectPropertyComponent,
    ItmobjectPropertyStringComponent,
    ItmobjectPropertyNumericComponent,
    ItmobjectPropertiesComponent,
    ItmobjectImageComponent,
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
  ]
})
export class ItmobjectModule { }
