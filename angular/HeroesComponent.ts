import {Component, OnInit} from '@angular/core'
import {Hero} from './Hero'
import {HeroService} from './HeroService'
import {Router} from '@angular/router'

@Component({
  selector: 'my-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  selectedHero: Hero
  heroes: Hero[]

  constructor(private heroService: HeroService,
              private router: Router) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes)
  }

  onSelected(hero: Hero) {
    this.selectedHero = hero
  }

  gotoDetail() {
    this.router.navigate(['/detail', this.selectedHero.id])
  }
}
