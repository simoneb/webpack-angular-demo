import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Hero} from './Hero'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
  constructor(private http: Http) {
  }

  getHeroes(): Promise<Hero[]> {
    return this.http.get('/api/heroes')
        .toPromise()
        .then(res => res.json())

  }

  getById(id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id))
  }

  saveHero(heroName: string) {
    return this.http.post('/api/heroes', {name: heroName})
        .toPromise()
        .then(res => res.json())
  }
}
