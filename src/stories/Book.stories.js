/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Book from '../components/Book.vue'

const book = {
  volumes: 1,
  type: 'Printed',
  language: 'English',
  categories: 'Drama',
  binding: {
    type: 'Tightback',
    material: 'Leather (unknown)',
    date: { year: '1815', approximate: false },
  },
  title: 'A Collection of Farces and Other Afterpieces',
  publication: {
    location: 'Edinburgh',
    printer: ['James Ballantyne'],
    date: { year: '1815' },
  },
  author: 'Elizabeth Inchbald',
  condition: 'Volume 5 only, rubbed binding with loss to spine.',
  owners: [
    {
      id: 1546734187117,
      name: 'George Booth',
      acquisition: {
        location: 'Beamsley Hall, Skipton, Yorkshire',
        date: { approximate: false, year: '1920' },
      },
    },
  ],
  id: 'DRA121:1',
}

storiesOf('Book', module)
  .add('with text', () => ({
    components: { Book },
    render() {
      return <Book book={book} />
    },
  }))
  .add('empty', () => ({
    components: { Book },
    render() {
      return <Book book={{}} />
    },
  }))
