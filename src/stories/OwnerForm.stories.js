/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import OwnerForm from '../components/OwnerForm.vue'

storiesOf('OwnerForm', module).add('default', () => ({
  components: { OwnerForm },
  render() {
    return <OwnerForm index={1} />
  },
}))
