/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import BookForm from '../components/BookForm.vue'

const template = {
  title: '',
  author: [],
  id: 0,
  volumes: 1,
  type: '',
  language: [],
  categories: [],
  shelfMark: '',
  publication: {
    date: {
      approximate: false,
      year: 0,
      month: 0,
      day: 0,
    },
    location: '',
  },
  binding: {
    type: '',
    material: '',
    date: {
      approximate: true,
      year: 0,
      month: 0,
      day: 0,
    },
  },
  owners: [
    {
      name: '',
      profession: [],
      birth: {
        date: {
          approximate: false,
          year: 0,
          month: 0,
          day: 0,
        },
        location: '',
      },
      aquisition: {
        date: {
          approximate: false,
          year: 0,
          month: 0,
          day: 0,
        },
        location: '',
      },
      death: {
        date: {
          approximate: false,
          year: 0,
          month: 0,
          day: 0,
        },
        location: '',
      },
    },
  ],
  condition: '',
  notes: '',
}

const updateBook = () => {}
const bookIds = [1, 2, 3]

storiesOf('BookForm', module).add('default', () => ({
  components: { BookForm },
  render() {
    return <BookForm template={template} updateBook={updateBook} bookIds={bookIds} />
  },
}))
