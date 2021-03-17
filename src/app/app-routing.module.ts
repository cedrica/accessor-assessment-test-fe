import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharactersComponent } from './characters/characters.component';
import { FilmsComponent } from './films/films.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { PeopleComponent } from './people/people.component';

const routes: Routes = [
  {path:'films', component: FilmsComponent},
  {path:'characters', component: CharactersComponent},
  {path:'character', component: PeopleComponent},
  { path: '',   redirectTo: 'films', pathMatch: 'full' }, // redirect to `first-component`
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
