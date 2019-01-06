/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import TextInput from '../components/TextInput.vue'

storiesOf('TextInput', module)
  .add('with placeholder', () => ({
    components: { TextInput },
    render() {
      return <TextInput label="text input" />
    },
  }))
  .add('without placeholder', () => ({
    components: { TextInput },
    render() {
      return <TextInput />
    },
  }))
