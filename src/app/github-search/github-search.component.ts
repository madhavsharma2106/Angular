import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

import { GithubService } from '../services/github.service';

@Component({
  selector: 'app-github-search',
  templateUrl: './github-search.component.html',
  styleUrls: ['./github-search.component.css']
})
export class GithubSearchComponent implements OnInit {

public users;
    
  constructor(
    private githubService: GithubService,
    private router: Router
  ) { }

  ngOnInit() {
  }

getUsers(value){
    
    this.githubService.getUsers(value).subscribe(
            res => {
                this.users = res;
            }
        );
}    
    
showDetail(user){
     this.router.navigate(['github-user-detail', user.login]);
}
    
}
