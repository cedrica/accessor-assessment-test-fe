import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { CharacterCardComponent } from "./character-card/character-card.component";
import { FilmCardComponent } from "./film-card/film-card.component";

@NgModule(
    {
        declarations: [
            FilmCardComponent,
            CharacterCardComponent
        ],
        imports: [CommonModule, RouterModule],
        exports: [
            FilmCardComponent,
            CharacterCardComponent
        ]
    }
)
export class SharedModule {

}