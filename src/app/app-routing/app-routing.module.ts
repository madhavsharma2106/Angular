import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { IssComponent } from '../iss/iss.component';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { GithubSearchComponent } from '../github-search/github-search.component';
import { GithubUserDetailComponent } from '../github-user-detail/github-user-detail.component';

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard',  component: DashboardComponent },
    { path: 'iss',  component: IssComponent },
    { path: 'github-search',  component: GithubSearchComponent },
    { path: 'github-user-detail/:userId',  component: GithubUserDetailComponent }
];


@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
