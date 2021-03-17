
import { CommonModule } from "@angular/common";
import { HttpClient } from "@angular/common/http";
import { Injectable, NgModule } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterModule, RouterStateSnapshot, Routes } from "@angular/router";
import { of } from "rxjs";
import { Film, IFilm } from "../shared/model/film";
import { FilmDetailComponent } from "./film-detail.component";

@Injectable({ providedIn: 'root' })
export class FilmDetailResolver implements Resolve<Film> {
    constructor(private http:HttpClient){}
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
        const url = route.queryParams["url"];
        if(url){
            return this.http.get<Film>(url);
        }
        return of(new IFilm());
    }
    
}

export const routes: Routes = [
    {
        path:'film-detail', 
        component: FilmDetailComponent,
        resolve : {
            film : FilmDetailResolver
        }
    }
  ];

@NgModule(
    {
        declarations: [FilmDetailComponent],
        exports: [FilmDetailComponent],
        imports: [RouterModule.forRoot(routes), CommonModule]
    }
)
export class FilmDetailModule {

}