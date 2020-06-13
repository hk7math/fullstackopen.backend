const express = require('express')
const app = express()

let persons = [
  { 
    "name": "Arto Hellas", 
    "number": "040-123456",
    "id": 1
  },
  { 
    "name": "Ada Lovelace", 
    "number": "39-44-5323523",
    "id": 2
  },
  { 
    "name": "Dan Abramov", 
    "number": "12-43-234345",
    "id": 3
  },
  { 
    "name": "Mary Poppendieck", 
    "number": "39-23-6423122",
    "id": 4
  }
]

app.get('/api/persons', (req, res) => {
  console.log(`${persons.length} records sent`)
  res.json(persons)
})

app.get('/info', (req, res) => {
  console.log(`Info is called`)
  res.send(`
    <p>Phonebook has info for ${persons.length} people</p>
    <p>${new Date()}</p>
  `)
})

app.get('/api/persons/:id', (req, res) => {
  const id = req.params.id|0
  const person = persons.find(p => p.id===id)
  if (person){
    console.log(`Person ${id} is called`)
    res.json(person)
  } else {
    console.log(`Person ${id} not found`)
    res.status(404).end()
  }
})

app.delete('/api/persons/:id', (req, res) => {
  const id = req.params.id|0
  persons = persons.filter(p => p.id!==id)
  console.log(`Person ${id} is removed`)
  res.status(204).end()
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})