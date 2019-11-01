import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { InstancesPageComponent } from './pages/instances-page/instances-page.component';
import { PropertiesPageComponent } from './pages/properties-page/properties-page.component';

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
