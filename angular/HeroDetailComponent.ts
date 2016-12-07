import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute} from '@angular/router'
import 'rxjs/add/operator/switchMap'

import {Location} from '@angular/common'
import {Hero} from './Hero'
import {HeroService} from './HeroService'

@Component({
  selector: 'my-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero

  constructor(private heroService: HeroService,
              private route: ActivatedRoute,
              private location: Location) {
  }

  ngOnInit(): void {
    this.route.params
        .switchMap(params => this.heroService.getHeroById(+params['id']))
        .subscribe(hero => this.hero = hero)
  }

  goBack(): void {
    this.location.back()
  }
}
