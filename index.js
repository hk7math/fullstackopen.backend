const express = require('express')
const app = express()

app.use(express.json())

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

app.post('/api/persons', (req, res) => {
  const body = req.body
  console.log(`Data received: `,body)
  
  if (!body.name) {
    return res.status(400).json({
      error: 'name missing'
    })
  } else if (persons.some(person => person.name === body.name)) {
    return res.status(403).json({
      error: 'duplicated name'
    })
  }
  
  if (!body.number) {
    return res.status(400).json({
      error: 'number missing'
    })
  }

  const person = {
    name: body.name,
    number: body.number,
    id: Math.floor(Math.random()*1e10)
  }

  persons = persons.concat(person)
  console.log(`${body.name} is added`)
  res.json(person)
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})