/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import BookList from '../components/BookList.vue'

const book = {
  title: 'A Collection of Farces and Other Afterpieces',
  publication: {
    location: 'Edinburgh',
    printer: ['James Ballantyne'],
    date: { year: '1815' },
  },
  author: 'Elizabeth Inchbald',
  id: 'DRA121:1',
}

storiesOf('BookList', module).add('with books', () => ({
  components: { BookList },
  render() {
    return <BookList books={[book, book, book]} />
  },
}))
