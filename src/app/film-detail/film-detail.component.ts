import { ReturnStatement } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Helper } from '../core/helper';
import { PeopleService } from '../people/people.service';
import { Film } from '../shared/model/film';
import { FilmDetailService } from './film-detail.service';

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.css']
})
export class FilmDetailComponent implements OnInit {

  film:Film;
  characters:[];
  mapCharacters:Map<String, any> = new Map();
  constructor(
    private peopleService:PeopleService, 
    private router:Router,
    private activatedRoute:ActivatedRoute) {

   }

  ngOnInit(): void {
    this.activatedRoute.data.subscribe(data  => {
      if(data === undefined) return;
      this.film = data.film;
      this.characters = this.film.characters;
      for(let url of this.characters){
        this.peopleService.findByUrl(url).subscribe(p =>{
          this.mapCharacters.set(url, p);
        });
      }
    });
  }

  convertToRom(episode_id){
    return Helper.convertToRom(episode_id);
  }
  findCharacterName(url){
    const people = this.mapCharacters.get(url);
    return people !== undefined? people.name:'';
  }

  goToCharacter(url){
    const people = this.mapCharacters.get(url);
    this.peopleService.setCharacter(people);
    this.router.navigate(['character']);
  }

}
