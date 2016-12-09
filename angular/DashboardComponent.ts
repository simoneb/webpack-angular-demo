import {Component, OnInit} from '@angular/core'
import {HeroService} from './HeroService'
import {Hero} from './Hero'
import {Observable} from 'rxjs'

@Component({
  selector: 'my-dashboard',
  template: require('./dashboard.component.html'),
  styles: [require('./dashboard.component.css')]
})
export class DashboardComponent implements OnInit {
  heroes: Observable<Hero[]>

  constructor(private heroService: HeroService) {
  }

  ngOnInit(): void {
    this.heroes = this.heroService.getHeroes()
        .map(heroes => heroes.slice(1, 5))
  }
}
