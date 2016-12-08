import {Injectable} from '@angular/core'
import {Http, Headers} from '@angular/http'

import {Hero} from './Hero'

import 'rxjs/add/operator/toPromise'

@Injectable()
export class HeroService {
  headers = new Headers({'Content-Type': 'application/json'})

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

  update(hero: Hero): Promise<Hero> {
    return this.http.put('/api/heroes', hero, {headers: this.headers})
        .toPromise()
        .then(() => hero)
  }

  create(name: string): Promise<Hero> {
    return this.http.post('/api/heroes', {name}, {headers: this.headers})
        .toPromise()
        .then(res => res.json())
  }

  delete(id: number) {
    return this.http.delete(`/api/heroes/${id}`)
        .toPromise()
  }
}
