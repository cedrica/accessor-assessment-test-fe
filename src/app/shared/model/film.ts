export interface Film {
    title?: string;
    episode_id?: number;
    opening_crawl?: string
    director?: string;
    producer?: string;
    release_date?: Date;
    species?: [];
    starships?: [];
    vehicles?: [];
    characters?: [];
    planets?: [];
    url?: string;
    created?: string;
    coverImage?: string
}

export class IFilm implements Film{
    constructor(    
        title?: string,
        episode_id?: number,
        opening_crawl?: string,
        director?: string,
        producer?: string,
        release_date?: Date,
        species?: [],
        starships?: [],
        vehicles?: [],
        characters?: [],
        planets?: [],
        url?: string,
        created?: string,
        coverImage?: string){
    }

}