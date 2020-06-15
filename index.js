require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const cors = require('cors')
const app = express()
const Person = require('./models/person')

morgan.token('body', (req) => JSON.stringify(req.body).replace('{}','-'))

app.use(cors())
app.use(express.json())
app.use(morgan(`:method :url :status :res[content-length] - :response-time ms :body`))
app.use(express.static('build'))

app.get('/api/persons', (req, res) => {
  Person.find({}).then(persons => {
    res.json(persons)
  })
})

app.get('/info', (req, res) => {
  Person.find({}).then(persons => {
    res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
    `)
  })
})

app.get('/api/persons/:id', (req, res) => {
  Person.find({_id: req.params.id})
    .then(persons => {
      const person = persons[0]
      if (person){
        res.json(person)
      } else {
        res.status(404).end()
      }
    })
})

app.delete('/api/persons/:id', (req, res) => {
  Person.deleteOne({_id: req.params.id})
    .then(() => {
      res.status(204).end()
    })
    .catch(err => {
      res.status(400).json({
        error: err
      })
    })  
})

app.post('/api/persons', (req, res) => {
  const body = req.body
  
  if (!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  }
  
  if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }
  
  Person.find({name: body.name})
  .then(persons => {
    if (persons.length > 0){
        return res.status(403).json({
          error: 'duplicated name'
        })
      }
    })

  const person = new Person({
    name: body.name,
    number: body.number,
  })

  person.save().then(savedPerson => {
    res.json(savedPerson)
  })
})

app.put('/api/persons/:id', (req, res) => {
  Person.updateOne({_id: req.params.id}, {number: req.body.number})
    .then(updatedRes => {
      res.json(req.body)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})