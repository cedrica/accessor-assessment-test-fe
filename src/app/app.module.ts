import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharactersComponent } from './characters/characters.component';
import { FilmDetailModule } from './film-detail/film-detail.module';
import { FilmsComponent } from './films/films.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { SharedModule } from './shared/shared.module';
import { ToRomanNumberPipe } from './shared/to-roman-number.pipe';
import { PeopleComponent } from './people/people.component';


@NgModule({
  declarations: [
    AppComponent,
    FilmsComponent,
    CharactersComponent,
    PageNotFoundComponent,
    ToRomanNumberPipe,
    PeopleComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    FilmDetailModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
