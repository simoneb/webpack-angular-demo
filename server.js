const http = require('http')
const express = require('express')
const bodyParser = require('body-parser')

const app = express()

const HEROES = [
  {id: 11, name: 'Mr. Nice'},
  {id: 12, name: 'Narco'},
  {id: 13, name: 'Bombasto'},
  {id: 14, name: 'Celeritas'},
  {id: 15, name: 'Magneta'},
  {id: 16, name: 'RubberMan'},
  {id: 17, name: 'Dynama'},
  {id: 18, name: 'Dr IQ'},
  {id: 19, name: 'Magma'},
  {id: 20, name: 'Tornado'}
]

app.use(bodyParser.json())

app.route('/api/heroes/:id?')
    .get((req, res) => {
      const {name} = req.query

      if(name) {
        const regex = new RegExp(name, 'i')
        return res.json(HEROES.filter(hero => regex.test(hero.name)))
      }

      res.json(HEROES)
    })
    .put((req, res) => {
      const {id, name} = req.body
      const hero = HEROES.find(hero => hero.id === id)
      hero.name = name
      res.end()
    })
    .post((req, res) => {
      const {name} = req.body
      const hero = {id: HEROES[HEROES.length - 1].id + 1, name}
      HEROES.push(hero)
      res.json(hero)
    })
    .delete((req, res) => {
      const {id} = req.params

      const hero = HEROES
          .find(({id: idToDelete}) => idToDelete === +id)

      HEROES.splice(HEROES.indexOf(hero), 1)
      res.end()
    })

http.createServer(app).listen(3000)
