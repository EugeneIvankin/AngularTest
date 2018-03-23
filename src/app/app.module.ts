import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { HttpClientModule }   from '@angular/common/http';
import { UsersDashboard } from './usersDashboard.component/usersDashboard.component';
import { UserFullInfoComponent } from './userFullInfo.component/userFullInfo.component';
import { UserCard } from './userCard.component/userCard.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { HttpService } from './http.service';



@NgModule({
  declarations: [
    AppComponent,
    UsersDashboard,
    UserCard,
    UserFullInfoComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDFX-LwFcuF6oZf85mnaA6KSVdDHVscdoo'
    }),
    HttpClientModule
  ],
  entryComponents: [UserFullInfoComponent],
  providers: [ 
    {provide: LocationStrategy, useClass: HashLocationStrategy}, 
    HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
