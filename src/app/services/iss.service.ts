import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

//import { Location } from '../models/Location';


@Injectable()
export class IssService {

  constructor( 
    private http: Http
  ) { }
    
    currentLocation(): Observable <any>{
    const url = 'http://api.open-notify.org/iss-now.json';
    return this.http.get(url).map(
        res => {
            const location = res.json();            
            return location;
        }
        );
    }
    
    numberOfPeople(){
        const url = "http://api.open-notify.org/astros.json";
         return this.http.get(url).map(
                res => {
                    const people = res.json();            
                    return people;
                }
            );
    }
}
