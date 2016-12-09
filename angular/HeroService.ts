import {Injectable} from '@angular/core'
import {Http} from '@angular/http'
import {Hero} from './Hero'

import 'rxjs/add/operator/toPromise'
import {Observable} from 'rxjs'

@Injectable()
export class HeroService {
  constructor(private http: Http) {
  }

  getHeroes(): Observable<Hero[]> {
    return this.http.get('/api/heroes')
        .map(res => res.json() as Hero[])
  }

  delete(id:number){
    return this.http.delete(`/api/heroes/${id}`)
        .toPromise()
        .then(res => res)

  }

  getById(id: number): Promise<Hero> {
    return this.getHeroes()
        .toPromise()
        .then(heroes => heroes.find(hero => hero.id === id))
  }

  update(hero:Hero): Promise<any> {
    return this.http.put("/api/heroes/", hero)
        .toPromise()
  }

  saveHero(heroName: string) {
    return this.http.post('/api/heroes', {name: heroName})
        .toPromise()
        .then(res => res.json())
  }
}
