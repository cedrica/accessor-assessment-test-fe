import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Film } from '../shared/model/film';
import { FilmsService } from './films.service';

@Component({
  selector: 'app-films',
  templateUrl: './films.component.html',
  styleUrls: ['./films.component.css']
})
export class FilmsComponent implements OnInit {

  films: Film[] = [];
  covers: string[] = ['cover1.png','cover2.png','cover3.png','cover4.png', 'cover5.png', 'cover6.png', 'cover7.png'];
  constructor(private filmsService:FilmsService) { }

  ngOnInit(): void {
    this.filmsService.fetchFilms()
    .pipe(
      map(items => {
        let ind = 0;
        for(let item of items){
          item.coverImage = './assets/images/cover1.png';///+this.covers[ind++];
        }
        console.log(items);
        return items;
      })
    )
    .subscribe(f => {
      this.films = f;
    });
  }


}
