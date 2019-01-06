/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import NumberInput from '../components/NumberInput.vue'

storiesOf('NumberInput', module)
  .add('with label', () => ({
    components: { NumberInput },
    render() {
      return <NumberInput label="number input" />
    },
  }))
  .add('without label', () => ({
    components: { NumberInput },
    render() {
      return <NumberInput />
    },
  }))
