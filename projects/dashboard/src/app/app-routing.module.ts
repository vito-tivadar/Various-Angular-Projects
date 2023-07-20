const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'docker', component: DockerControlPanelComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { DockerControlPanelComponent } from './components/docker/docker-control-panel/docker-control-panel.component';
