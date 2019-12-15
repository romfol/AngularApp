import { Injectable } from "@angular/core";
import { Hero } from "./hero";
import { Observable, of } from "rxjs";
import { MessageService } from "./message.service";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { catchError, map, tap } from "rxjs/operators";

@Injectable({
  providedIn: "root"
})
export class HeroService {
  getHeroes(): Observable<Hero[]> {
    return this.http
      .get<Hero[]>(this.heroesUrl)
      .pipe(catchError(this.handleError<Hero[]>("getHeroes", [])));
  }

  // getHero(id: number): Observable<Hero> {
  //   this.messageService.add(`HeroService: fetched hero id=${id}`);
  //   return of(HEROES.find(hero => hero.id === id));
  // }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
  private heroesUrl = "api/heroes";

  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}
}
