import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';

@Component({
  selector: 'app-twitterapp',
  templateUrl: './twitterapp.component.html',
  styleUrls: ['./twitterapp.component.css']
})
export class TwitterappComponent {
searchQuery: String;
  tweetsData;
 authDone = false;

  constructor(
    private http: Http
  ) { }


  makeCall() {
    var headers = new Headers();

    headers.append('Content-Type', 'application/x-www-form-urlencoded;charset=UTF-8.');

    this.http.post('http://10.67.225.109:3000/authorize', { headers: headers }).subscribe((res) => {
      console.log(res);
    });
      this.authDone = true;
  }


searchCall(){
    var headers = new Headers();
    var searchTerm = 'query=' + this.searchQuery;
    
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    this.http.post('http://10.67.225.109:3000/search', searchTerm, {headers: headers}).subscribe((res) => {
      this.tweetsData = res.json().data.statuses;
      console.log(this.tweetsData);
    });
  }
}
