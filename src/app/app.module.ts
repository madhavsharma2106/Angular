import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule }    from '@angular/http';
import { AgmCoreModule } from '@agm/core';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { ChartsModule } from 'ng2-charts/ng2-charts';

import { AppRoutingModule } from './app-routing/app-routing.module';

import { IssService } from './services/iss.service';
import { GithubService } from './services/github.service';

import { AppComponent } from './app.component';
import { IssComponent } from './iss/iss.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { GithubSearchComponent } from './github-search/github-search.component';
import { GithubUserDetailComponent } from './github-user-detail/github-user-detail.component';
import { FormComponent } from './form/form.component';
import { ModelDrivenFormComponent } from './model-driven-form/model-driven-form.component';
import { MdfFormBuilderComponent } from './mdf-form-builder/mdf-form-builder.component';
import { TemplateDrivenFormComponent } from './template-driven-form/template-driven-form.component';
import { LifecycleHooksComponent } from './lifecycle-hooks/lifecycle-hooks.component';
import { InputOutputComponent } from './input-output/input-output.component';
import { ChildComponent } from './child/child.component';
import { TwitterComponent } from './twitter/twitter.component';
import { ChartsComponent } from './charts/charts.component';
import { CalendarComponent } from './calendar/calendar.component';

@NgModule({
  declarations: [
    AppComponent,
    IssComponent,
    DashboardComponent,
    NavbarComponent,
    GithubSearchComponent,
    GithubUserDetailComponent,
    FormComponent,
    ModelDrivenFormComponent,
    MdfFormBuilderComponent,
    TemplateDrivenFormComponent,
    LifecycleHooksComponent,
    InputOutputComponent,
    ChildComponent,
    TwitterComponent,
    ChartsComponent,
    CalendarComponent
    ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyD9K-4fMGSKbkWVxkLBUhBuo9kuedjwoAc'
    }),
    ChartsModule
  ],
  providers: [
    IssService,
    GithubService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
