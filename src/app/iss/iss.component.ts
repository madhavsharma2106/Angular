import { Component, OnInit } from '@angular/core';

//import { Location } from '../models/Location';
import { IssService } from '../services/iss.service';



@Component({
  selector: 'app-iss',
  templateUrl: './iss.component.html',
  styleUrls: ['./iss.component.css']
})
export class IssComponent implements OnInit {

    public location;    
    public lat: number;
    public lng: number;
    public showMap = false;
    public people;
    
    
  constructor(
      private issService: IssService,
  ) { }

  ngOnInit() { 
    //    this.lat = location.iss_position.latitude;
    //    this.lng = location.iss_position.longitude;+
       console.log(this.location.iss_position);
  }
    
issLocation(){
    
   this.issService.currentLocation().subscribe(
    res => {
        this.location = res;
    }
    );
   
}
    
numberOfPeople(){
    this.issService.numberOfPeople().subscribe(
    res => {
        this.people = res;
    }
    );
}
    
showInMap(){
    this.showMap = true;
    this.issLocation();
    this.lat = parseInt(this.location.iss_position.latitude);
    this.lng = parseInt(this.location.iss_position.longitude);
}
    
}
