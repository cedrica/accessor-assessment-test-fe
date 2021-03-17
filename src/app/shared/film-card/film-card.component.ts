import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FilmDetailService } from 'src/app/film-detail/film-detail.service';
import { Film } from '../model/film';

@Component({
  selector: 'app-film-card',
  templateUrl: './film-card.component.html',
  styleUrls: ['./film-card.component.css']
})
export class FilmCardComponent implements OnInit {
  @Input()
  film:Film
  constructor(private router:Router, private filmDetailService:FilmDetailService) { }

  ngOnInit(): void {
  }

}
