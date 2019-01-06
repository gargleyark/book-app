/* eslint-disable import/no-extraneous-dependencies */
import { storiesOf } from '@storybook/vue'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'

import Owner from '../components/Owner.vue'

storiesOf('Owner', module)
  .add('name only', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Carleton',
          }}
        />
      )
    },
  }))
  .add('name + profession', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Carleton',
            profession: 'Bishop of Llandaff and Chichester',
          }}
        />
      )
    },
  }))
  .add('name + birth', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Carleton',
            birth: { date: { year: '1559' } },
          }}
        />
      )
    },
  }))
  .add('name + death', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Carleton',
            death: { date: { year: '1559' } },
          }}
        />
      )
    },
  }))
  .add('name + birth + death', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Carleton',
            death: { date: { year: '1559' } },
            birth: { date: { year: '1629' } },
          }}
        />
      )
    },
  }))
  .add('all details', () => ({
    components: { Owner },
    render() {
      return (
        <Owner
          owner={{
            id: 1546735034853,
            name: 'George Bobbly Carleton',
            profession: 'Phantom Cricket Player',
            death: { date: { year: '1559' } },
            birth: { date: { year: '1629' } },
            acquisition: { date: { year: '1620' } },
          }}
        />
      )
    },
  }))
