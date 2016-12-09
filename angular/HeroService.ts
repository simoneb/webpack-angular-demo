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

  delete(id:number){
    return this.http.delete(`/api/heroes/${id}`)
        .toPromise()
        .then(res => res)

  }

  getById(id: number): Promise<Hero> {
    return this.getHeroes()
        .then(heroes => heroes.find(hero => hero.id === id))
  }

  update(hero:Hero): Promise<any> {
    return this.http.put("/api/heroes/", hero)
               .toPromise()
               
  }
}
