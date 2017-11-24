import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { PolicyListComponent } from './Policies/policy-list.component';
import { HttpClientModule } from '@angular/common/http';
import { LoggerModule, NgxLoggerLevel } from 'ngx-logger';
import { PolicyDetailComponent } from './policies/policy-detail.component';
import { WelcomeComponent } from './home/welcome.component';
import { RouterModule} from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    PolicyListComponent,
    PolicyDetailComponent,
    WelcomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'policies', component: PolicyListComponent},
      {path: 'policies/:id', component: PolicyDetailComponent},
      {path: 'welcome', component: WelcomeComponent},
      {path: '', redirectTo: 'welcome', pathMatch: 'full'},
      {path: '**', redirectTo: 'welcome', pathMatch: 'full' }
    ]),
    LoggerModule.forRoot({serverLoggingUrl: '/api/logs', level: NgxLoggerLevel.DEBUG, serverLogLevel: NgxLoggerLevel.ERROR})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
