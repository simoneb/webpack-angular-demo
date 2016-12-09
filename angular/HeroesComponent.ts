import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {Hero} from './Hero'
import {HeroService} from './HeroService'

@Component({
  selector: 'my-heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.css')]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero
  heroes: Hero[]

  ngOnInit() {
    this.heroService
        .getHeroes()
        .then(heroes => this.heroes = heroes)
  }

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  addHero(heroName) {
    this.heroService.saveHero(heroName)
        .then(newHero => this.heroes.push(newHero))
  }
}
