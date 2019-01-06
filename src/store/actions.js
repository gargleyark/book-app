export default {
  getFullBookTemplate: (context) => {
    context.commit('setLoadingState', true)

    context
      .dispatch('getBookTemplate')
      .then(template => context.dispatch('getBookBindingTypes', template))
      .then(template => context.dispatch('getBookBindingMaterials', template))
      .then(template => context.dispatch('getBookEditionTypes', template))
      .then(template => context.dispatch('getBookEditionCategories', template))
      .then(template => context.dispatch('getBookEditionLanguages', template))
      .then((template) => {
        context.state.template = template
        context.commit('setLoadingState', false)
      })
      .catch(e => context.commit('setLoadingState', false))
  },
  getBooks: (context) => {
    context.commit('setLoadingState', true)
    fetch('http://localhost:3001/get/books')
      .then(response => response.json())
      .then((books) => {
        context.commit('setLoadingState', false)
        context.commit('createBookList', books)
        context.commit('updateAutoCompleteOptions', books)
      })
      .catch((e) => {
        context.commit('setLoadingState', false)
      })
  },
  getBookTemplate: context =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/template')
        .then(response => response.json())
        .then((template) => {
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBook: (context, id) =>
    new Promise((resolve, reject) => {
      fetch(`http://localhost:3001/get/book/${id}`)
        .then(response => response.json())
        .then((book) => {
          resolve(book)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBookBindingTypes: (context, template) =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/binding/types')
        .then(response => response.json())
        .then((types) => {
          context.commit('updateAutoCompleteOptions', types)
          template.binding.type = types
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBookBindingMaterials: (context, template) =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/binding/materials')
        .then(response => response.json())
        .then((materials) => {
          template.binding.material = materials
          context.commit('updateAutoCompleteOptions', materials)
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBookEditionTypes: (context, template) =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/edition/types')
        .then(response => response.json())
        .then((types) => {
          template.type = types
          context.commit('updateAutoCompleteOptions', types)
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBookEditionCategories: (context, template) =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/edition/categories')
        .then(response => response.json())
        .then((categories) => {
          template.categories = categories
          context.commit('updateAutoCompleteOptions', categories)
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  getBookEditionLanguages: (context, template) =>
    new Promise((resolve, reject) => {
      fetch('http://localhost:3001/get/books/edition/languages')
        .then(response => response.json())
        .then((languages) => {
          template.language = languages
          context.commit('updateAutoCompleteOptions', languages)
          resolve(template)
        })
        .catch((e) => {
          reject(e)
        })
    }),
  createBook: (context, book) =>
    new Promise((resolve, reject) => {
      const getBookId = (category = 'Miscellaneous', vols, previousTotalNumberOfBooks) =>
        `${category.match(/^.../)[0].toUpperCase()}${previousTotalNumberOfBooks + 1}:${
          vols > 1 ? `1-${vols}` : '1'
        }`

      context.commit('setLoadingState', true)
      book.id = getBookId(book.categories || '', book.volumes || 1, context.state.books.length)
      context.commit('addBookToBookList', book)

      fetch('http://localhost:3001/create/books', {
        body: JSON.stringify(book),
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json; charset=UTF-8',
        },
      })
        .then(response => response.json())
        .then((res) => {
          context.commit('setLoadingState', false)
          resolve(res)
        })
        .catch((e) => {
          context.commit('setLoadingState', false)
          reject({ error: e })
        })
    }),
  getBooksByQuery: (context, data) =>
    new Promise((resolve, reject) => {
      context.commit('setLoadingState', true)
      fetch(`http://localhost:3001/query/books/?q=${encodeURI(data.search)}${(data.exact &&
          '&exact=true') ||
          ''}`)
        .then(response => response.json())
        .then((books) => {
          context.commit('setLoadingState', false)
          resolve(books)
        })
        .catch((e) => {
          context.commit('setLoadingState', false)
          reject({ error: e })
        })
    }),
}
