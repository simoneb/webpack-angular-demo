import {Component, OnInit} from '@angular/core'
import {Router} from '@angular/router'

import {Hero} from './Hero'
import {HeroService} from './HeroService'
import {Observable} from 'rxjs'

@Component({
  selector: 'my-heroes',
  template: require('./heroes.component.html'),
  styles: [require('./heroes.component.css')]
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero
  heroes: Observable<Hero[]>

  getHeroes() {
    this.heroes = this.heroService.getHeroes()
  }

  ngOnInit() {
    this.getHeroes()
  }

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  deleteHero(id: number) {
    var res = window.confirm("Sicuro di eliminare?")
    if (res) {
      this.heroService.delete(id).then(
          res => {
            this.getHeroes(),
                this.selectedHero = null
          }
      )
    }
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }

  addHero(heroName) {
    this.heroService.saveHero(heroName)
        .then(newHero => this.getHeroes())
  }
}
