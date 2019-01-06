/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import SelectInput from '../components/SelectInput.vue'

storiesOf('SelectInput', module)
  .add('with label', () => ({
    components: { SelectInput },
    render() {
      return (
        <SelectInput label="choose your option" options={['1', 'two', 'hi']} click={() => {}} />
      )
    },
  }))
  .add('without label', () => ({
    components: { SelectInput },
    render() {
      return <SelectInput options={['1', 'two', 'hi']} click={() => {}} />
    },
  }))
