import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HightlightComponent } from './pages/hightlight/hightlight.component';
import { ActivityfeedComponent } from './pages/activityfeed/activityfeed.component';
import { WorldmapComponent } from './pages/worldmap/worldmap.component';
import { DataTablesModule } from 'angular-datatables';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HightlightComponent,
    ActivityfeedComponent,
    WorldmapComponent
  ],
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(),
    HttpClientModule// ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
