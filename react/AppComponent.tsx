import * as React from 'react'
import axios from 'axios'

import {HeroesComponent} from './HeroesComponent'
import {Hero} from '../angular/Hero'

interface S {
  heroes: Hero[]
}

export class AppComponent extends React.Component<any, S> {
  constructor() {
    super()
    this.state = {
      heroes: []
    }
  }

  componentWillMount() {
    this.getHeroes()
  }

  getHeroes() {
    axios.get('/api/heroes')
        .then(res => {
          const heroes = res.data as Hero[]
          this.setState({heroes})
        })
  }

  onAddHero = (name: string) => {
    axios.post('/api/heroes', {name})
        .then(() => this.getHeroes())
  }

  render() {
    const {heroes} = this.state

    return <HeroesComponent
        heroes={heroes}
        onAddHero={this.onAddHero} />
  }
}
