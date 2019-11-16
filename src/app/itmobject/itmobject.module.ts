import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItmobjectImageComponent } from './components/itmobject-image/itmobject-image.component';
import { ItmobjectInstanceComponent } from './components/itmobject-instance/itmobject-instance.component';
import { ItmobjectInstancesComponent } from './components/itmobject-instances/itmobject-instances.component';
import { ItmobjectMethodComponent } from './components/itmobject-method/itmobject-method.component';
import { ItmobjectMethodsComponent } from './components/itmobject-methods/itmobject-methods.component';
import { ItmobjectPropertiesComponent } from './components/itmobject-properties/itmobject-properties.component';
import { ItmobjectPropertyComponent } from './components/itmobject-property/itmobject-property.component';
import { ItmobjectComponent } from './components/itmobject/itmobject.component';


@NgModule({
  imports: [
    CommonModule,
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
