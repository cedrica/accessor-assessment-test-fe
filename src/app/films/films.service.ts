import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Film } from '../shared/model/film';
import { BASE_URL } from '../shared/urls';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FilmsService {

  constructor(protected http:HttpClient) { }

  fetchFilms(): Observable<Film[]>{
    return this.http.get<any>(BASE_URL + 'films/')
    .pipe( 
      map(res => res.results)
    );
  }
}
