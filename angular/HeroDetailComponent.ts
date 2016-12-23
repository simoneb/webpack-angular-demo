import {Component, Input, OnInit} from '@angular/core'
import {ActivatedRoute, Router} from '@angular/router'
import {Location} from '@angular/common'
import {HeroService} from './HeroService'
import {Hero} from './Hero'

@Component({
  selector: 'my-hero-detail',
  template: require('./hero-detail.component.html')
})
export class HeroDetailComponent implements OnInit {
  @Input()
  hero: Hero

  constructor(private route: ActivatedRoute,
              private heroService: HeroService,
              private location: Location,
              private router: Router) {
  }

  ngOnInit() {
    this.route.params
        .switchMap(({id}) => this.heroService.getById(+id))
        .subscribe(hero => this.hero = hero)
  }

  goBack() {
    this.location.back()
  }

  save() {
    this.heroService
        .update(this.hero)
        .then(() => {
          this.router.navigate(['/dashboard'])
        })
  }
}
