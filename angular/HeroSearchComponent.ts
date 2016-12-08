import {Component, OnInit} from '@angular/core'
import {HeroSearchService} from './HeroSearchService'
import {Router} from '@angular/router'
import {Subject, Observable} from 'rxjs'
import {Hero} from './Hero'

@Component({
  selector: 'hero-search',
  template: require('./hero-search.component.html'),
  styles: [require('./hero-search.component.css')]
})
export class HeroSearchComponent implements OnInit {
  heroes: Observable<Hero[]>
  private searchTerms = new Subject<string>()

  constructor(private heroSearchService: HeroSearchService,
              private router: Router) {

  }

  search(term: string) {
    this.searchTerms.next(term)
  }

  ngOnInit(): void {
    this.heroes = this.searchTerms
        .debounceTime(300)
        .distinctUntilChanged()
        .switchMap(term => term ? this.heroSearchService.search(term) : Observable.of<Hero[]>([]))
        .catch(error => {
          console.error(error)
          return Observable.of<Hero[]>([])
        })
  }

  gotoDetail(hero: Hero) {
    this.router.navigate(['/detail', hero.id])
  }

}
