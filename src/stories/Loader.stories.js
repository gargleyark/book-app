/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Loader from '../components/Loader.vue'

storiesOf('Loader', module).add('default', () => ({
  components: { Loader },
  render() {
    return <Loader />
  },
}))
