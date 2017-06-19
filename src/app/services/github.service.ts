import { Injectable } from '@angular/core';
import { Http }       from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';

@Injectable()
export class GithubService {

  constructor( 
private http: Http
  ) { }
    
getUsers(value): Observable <any>{
    const url = "https://api.github.com/search/users?q=" + value;
        return this.http.get(url).map(
        res => {
                const users = res.json();
                console.log(users);
                return users;            
        });
}

getUserDetail(userId): Observable <any>{
    const url = 'https://api.github.com/users/'+ userId;
    return this.http.get(url).map(
      res =>{
        const user = res.json();
        return user;
      }
    )
}
    
}
