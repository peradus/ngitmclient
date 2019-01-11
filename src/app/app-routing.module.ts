import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';
import { InstancesPageComponent } from './instances-page/instances-page.component';
import { PropertiesPageComponent } from './properties-page/properties-page.component';

const routes: Routes = [
  {path: '', component: HomeComponent },
  {path: '#', component: HomeComponent },
  {path: 'About', component: AboutComponent},
  {path: 'Instances', component: InstancesPageComponent},
  {path: 'Properties', component: PropertiesPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
