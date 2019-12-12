import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.getHero();
  }

  heroes: Hero[]
  selectedHero: Hero;

  getHero(): void {
    this.heroes = this.heroService.getHeroes()
  }

  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
}
