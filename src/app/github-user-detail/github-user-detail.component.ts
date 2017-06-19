import { Component, OnInit } from '@angular/core';
import { GithubService } from '../services/github.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-github-user-detail',
  templateUrl: './github-user-detail.component.html',
  styleUrls: ['./github-user-detail.component.css']
})
export class GithubUserDetailComponent implements OnInit {

    public user;
    
constructor( private githubService: GithubService, private activatedRoute: ActivatedRoute ) { }

  ngOnInit() {
      const userId = this.activatedRoute.snapshot.params['userId'];
      this.githubService.getUserDetail(userId).subscribe(
        res => {
            this.user = res;
            console.log(this.user);
        }
    ); 
  }




}
