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
    this.getHeroes()
  }

  getHeroes() {
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

  add(name: string) {
    this.heroService.create(name).then(hero => this.getHeroes())
  }

  delete(hero: Hero) {
    this.heroService.delete(hero.id).then(hero => this.getHeroes())
  }
}
