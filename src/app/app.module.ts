import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';
import {Routes, RouterModule} from '@angular/router';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { UsersDashboardComponent } from './usersDashboard.component/usersDashboard.component';
import { UserFullInfoComponent } from './userFullInfo.component/userFullInfo.component';
import { UserCardComponent } from './userCard.component/userCard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpService } from './http.service';


const appRoutes: Routes = [
  { path: 'full_info_about', component: UserFullInfoComponent},
  { path: '**', component: UsersDashboardComponent}
];


@NgModule({
  declarations: [
    AppComponent,
    UsersDashboardComponent,
    UserCardComponent,
    UserFullInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFX-LwFcuF6oZf85mnaA6KSVdDHVscdoo'
    }),
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  entryComponents: [],
  providers: [ {provide: LocationStrategy, useClass: HashLocationStrategy}, HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
