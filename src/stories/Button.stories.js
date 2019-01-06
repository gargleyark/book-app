/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import CustomButton from '../components/Button.vue'

storiesOf('Button', module).add('with text', () => ({
  components: { CustomButton },
  render() {
    return <CustomButton onClick={this.action} text={'hello'} />
  },
  methods: {
    action: action('clicked'),
  },
}))
