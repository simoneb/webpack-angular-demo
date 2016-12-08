import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import {Location} from '@angular/common'
import {HeroService} from './HeroService'
import {Hero} from './Hero'

@Component({
  selector: 'my-hero-detail',
  template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {
  hero: Hero

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location) {
  }

  ngOnInit() {
    this.route.params
        .subscribe(({id}) => this.heroService.getById(+id)
            .then(hero => this.hero = hero))
  }

  goBack() {
    this.location.back()
  }

  save() {
    this.heroService.update(this.hero).then(() => this.goBack())
  }
}
