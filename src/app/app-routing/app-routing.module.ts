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
import { LifecycleHooksComponent } from '../lifecycle-hooks/lifecycle-hooks.component';
import { InputOutputComponent } from '../input-output/input-output.component';
<<<<<<< HEAD
import { TwitterComponent } from '../twitter/twitter.component';
import { ChartsComponent } from '../charts/charts.component';
=======
import { TwitterappComponent } from '../twitterapp/twitterapp.component';
>>>>>>> 7a0be00c75931275564233ee41c51920fdbbe36f


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
    { path: 'charts',  component: ChartsComponent },
    { path: 'lifecycle-hooks',  component: LifecycleHooksComponent },
    { path: 'input-output',  component: InputOutputComponent },
<<<<<<< HEAD
    { path: 'twitter',  component: TwitterComponent },
=======
    { path: 'twitterapp',  component: TwitterappComponent },
>>>>>>> 7a0be00c75931275564233ee41c51920fdbbe36f
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
