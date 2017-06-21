import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssComponent } from '../iss/iss.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GithubSearchComponent } from '../github-search/github-search.component';
import { GithubUserDetailComponent } from '../github-user-detail/github-user-detail.component';
import { FormComponent } from '../form/form.component';
import { TemplateDrivenFormComponent } from '../template-driven-form/template-driven-form.component';
import { ModelDrivenFormComponent } from '../model-driven-form/model-driven-form.component';
import { MdfFormBuilderComponent } from '../mdf-form-builder/mdf-form-builder.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'iss',  component: IssComponent },
    { path: 'github-search',  component: GithubSearchComponent },
    { path: 'github-user-detail/:userId',  component: GithubUserDetailComponent },
    { path: 'form',  component: FormComponent,
        children:[
            { path: 'template-driven-form',  component: TemplateDrivenFormComponent },
            { path: 'model-driven-form',  component: ModelDrivenFormComponent },
            { path: 'mdf-form-builder',  component: MdfFormBuilderComponent },  
        ]
    },    
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
