import * as React from 'react'
import {Hero} from '../angular/Hero'

interface P {
  heroes: Hero[],
  onAddHero: (string) => void
}

interface S {
  selectedHero?: Hero
}

export class HeroesComponent extends React.Component<P, S> {
  constructor() {
    super()
    this.state = {}
  }

  refs: {
    input: HTMLInputElement
  }

  onAdd = e => {
    const {onAddHero} = this.props
    const {input} = this.refs

    onAddHero(input.value)
  }

  onSelectHero(hero: Hero) {
    return () => this.setState({ selectedHero: hero })
  }

  onDelete(id: number) {
    return e => {
      console.log('delete ' + id)
    }
  }

  gotoDetail() {

  }

  render() {
    const {heroes} = this.props
    const {selectedHero} = this.state

    return <div>
      <h2>My Heroes</h2>
      <div className="heroes">
        <input type="text" ref="input" />
        <button onClick={this.onAdd}>Add</button>
      </div>
      <ul className="heroes">
        {heroes.map(hero =>
            <li key={hero.id}
                onClick={this.onSelectHero(hero)}
                className="selected">
              <span className="badge">{hero.id}</span> {hero.name}
              <button onClick={this.onDelete(hero.id)}>X</button>
            </li>
        )}
      </ul>
      {selectedHero && <div>
        <h2>
          {selectedHero.name.toUpperCase()} is my hero
        </h2>
        <button onClick={this.gotoDetail}>View Details</button>
      </div>}
    </div>
  }
}
