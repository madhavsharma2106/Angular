import { Component, OnInit } from '@angular/core';
import {Http} from '@angular/http' 

@Component({
  selector: 'app-twitter',
  templateUrl: './twitter.component.html',
  styleUrls: ['./twitter.component.css']
})
export class TwitterComponent implements OnInit {

  constructor(private http: Http) { }

  ngOnInit() {
  }

  makeCall(){
    alert("Currently under Construction, Please wait for 24 hours");
  }

}
