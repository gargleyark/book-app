/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import DateInput from '../components/DateInput.vue'

storiesOf('DateInput', module)
  .add('with label', () => ({
    components: { DateInput },
    render() {
      return <DateInput label="my favourite" />
    },
  }))
  .add('without label', () => ({
    components: { DateInput },
    render() {
      return <DateInput />
    },
  }))
