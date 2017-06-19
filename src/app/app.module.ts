import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from '@agm/core';

import { AppComponent } from './app.component';
import { IssComponent } from './iss/iss.component';

import { IssService } from './services/iss.service';
import { GithubService } from './services/github.service';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubUserDetailComponent } from './github-user-detail/github-user-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    IssComponent,
    DashboardComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubUserDetailComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9K-4fMGSKbkWVxkLBUhBuo9kuedjwoAc'
    }),
  ],
  providers: [
    IssService,
    GithubService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
