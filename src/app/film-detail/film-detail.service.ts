import { Injectable } from '@angular/core';
import { Film } from '../shared/model/film';

@Injectable({
  providedIn: 'root'
})
export class FilmDetailService {

  film:Film = undefined;
  constructor() { }



  getFilm(){
    return this.film;
  }

  setFilm(film: Film) {
    this.film = film;
  }
}
