/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SearchForm from '../components/SearchForm.vue'

storiesOf('SearchForm', module).add('empty search', () => ({
  components: { SearchForm },
  render() {
    return <SearchForm />
  },
}))
