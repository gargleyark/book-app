/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Footer from '../components/Footer.vue'

storiesOf('Footer', module).add('default', () => ({
  components: { Footer },
  render() {
    return <Footer />
  },
}))
