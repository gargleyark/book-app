const fs = require('fs')
const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')

const data = require('./data/books.json')
const newBook = require('./data/newBook.json')

const editionOptions = {
  types: require('./data/edition/types.json'),
  categories: require('./data/edition/categories.json'),
  languages: require('./data/edition/languages.json'),
}

const bindingOptions = {
  types: require('./data/binding/types.json'),
  materials: require('./data/binding/materials.json'),
}

const app = express()
app.use(cors())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.post('/create/books', (req, res) => {
  console.log('adding book', req.body)
  data.push(req.body)

  const stringData = JSON.stringify(data)

  // this will do for now but will need refactoring into a
  // write stream once the file is large enough to be able
  // to test the most efficient method
  fs.writeFileSync('./node/data/books.json', stringData)
  res.send({ success: true })
})

app.get('/get/books', (req, res) => {
  console.log('getting books')
  res.send(data)
})

app.get('/get/book/:id', (req, res) => {
  console.log('getting book', req.params.id)
  let found
  data.forEach((book) => {
    if (book.id === req.params.id) {
      res.send(book)
      found = true
    }
  })
  if (!found) {
    res.send({ error: 'No such book' })
  }
})

app.get('/query/books', (req, res) => {
  console.log('querying books')
  const query = decodeURI(req.query.q)
  const queryRegExp = new RegExp(query, 'i')
  res.send(data.filter(book => JSON.stringify(book).match(queryRegExp)))
})

app.get('/get/books/template', (req, res) => {
  console.log('getting template')
  res.send(newBook)
})

app.get('/get/books/binding/types', (req, res) => {
  console.log('getting binding types')
  res.send(bindingOptions.types)
})

app.get('/get/books/binding/materials', (req, res) => {
  console.log('getting binding materials')
  res.send(bindingOptions.materials)
})

app.get('/get/books/edition/types', (req, res) => {
  console.log('getting edition types')
  res.send(editionOptions.types)
})

app.get('/get/books/edition/categories', (req, res) => {
  console.log('getting edition categories')
  res.send(editionOptions.categories)
})

app.get('/get/books/edition/languages', (req, res) => {
  console.log('getting edition languages')
  res.send(editionOptions.languages)
})

app.listen(3001, () => {
  console.info('started with:')
  console.info(data)
})
