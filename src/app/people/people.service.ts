import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: any;
  constructor(private http:HttpClient) { }


  setCharacter(people: any) {
    this.people = people;
  }

  getCharacter() {
    return this.people;
  }

  findByUrl(url:string):Observable<any>{
    return this.http.get(url);
  }
}
