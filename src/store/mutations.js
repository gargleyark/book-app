export default {
  createBookList(state, books) {
    state.bookIds = [''].concat(books.map(book => book.id))
    state.books = books
  },
  updateBookIds(state, id) {
    state.bookIds.push(id)
  },
  setLoadingState(state, loading) {
    state.loading = loading
  },
  addBookToBookList(state, book) {
    state.books.push(book)
  },
  updateAutoCompleteOptions(state, options) {
    if (typeof options[0] === undefined && options.title) {
      state.autoCompleteOptions.push(options.title)
    }
    if (typeof options[0] === 'object') {
      const titleArray = options.map(book => book.title).filter(item => !!item)
      state.autoCompleteOptions = state.autoCompleteOptions.concat(titleArray)
    }
    if (typeof options[0] === 'string') {
      state.autoCompleteOptions = state.autoCompleteOptions.concat(options)
    }

    state.autoCompleteOptions = state.autoCompleteOptions.filter((value, index, self) => self.indexOf(value) === index)
  },
}
