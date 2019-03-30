import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ActivityfeedComponent} from "./pages/activityfeed/activityfeed.component";
import {HightlightComponent} from "./pages/hightlight/hightlight.component";
import {WorldmapComponent} from "./pages/worldmap/worldmap.component";

const routes: Routes = [
  { path: 'activity', component: ActivityfeedComponent },
  { path: 'highlight', component: HightlightComponent },
  { path: 'worldmap', component: WorldmapComponent },
  { path: '', redirectTo: '/activity', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
