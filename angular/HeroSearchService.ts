import {Http} from '@angular/http'
import {Observable} from 'rxjs'
import {Injectable} from '@angular/core'

import {Hero} from './Hero'

@Injectable()
export class HeroSearchService {
  constructor(private http: Http) {

  }

  search(term: string): Observable<Hero[]> {
    return this.http.get(`/api/heroes?name=${term}`)
        .map(res => res.json() as Hero[])
  }
}
