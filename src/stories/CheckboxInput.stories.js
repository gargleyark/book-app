/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CheckboxInput from '../components/CheckboxInput.vue'

storiesOf('CheckboxInput', module)
  .add('with label', () => ({
    components: { CheckboxInput },
    render() {
      return <CheckboxInput label="here be checkbox" />
    },
  }))
  .add('without label', () => ({
    components: { CheckboxInput },
    render() {
      return <CheckboxInput />
    },
  }))
