import {Component, OnInit} from '@angular/core'
import {HeroService} from './HeroService'
import {Hero} from './Hero'

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[]

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroService.getHeroes()
        .then(heroes => this.heroes = heroes.slice(1, 5))
  }
}
