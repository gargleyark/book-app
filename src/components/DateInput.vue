<template>
  <div>
    <p>{{ label }} date</p>
    <span>
      <label :for="`${label}-day`">{{ label }} day</label>
      <input placeholder="DD" type="number" :name="`${label}-day`" v-model="dayInput" @keyup="() => setDateValue('day', dayInput)"/>
      <label :for="`${label}-month`">{{ label }} month</label>
      <input placeholder="MM" type="number" :name="`${label}-month`" v-model="monthInput" @keyup="() => setDateValue('month', monthInput)"/>
      <label :for="`${label}-year`">{{ label }} year</label>
      <input placeholder="YYYY" type="number" :name="`${label}-year`" v-model="yearInput" @keyup="() => setDateValue('year', yearInput)"/>
    </span>
    <CheckboxInput label="Approximate" :name="`${label}-date-approximate`" v-model="approximate" :click="() => setDateValue('approximate', approximate)"/>
  </div>
</template>

<script>
  import CheckboxInput from '@/components/CheckboxInput'

  export default {
    name: 'DateInput',
    components: {
      CheckboxInput
    },
    props: {
      keyUp: Function,
      label: String
    },
    data() {
      return {
        dateObject: {},
        dayInput: '',
        monthInput: '',
        yearInput: '',
        approximate: false
      }
    },
    methods: {
      setDateValue(name, value) {
        const updatedDateObject = this.dateObject
        
        if (value === undefined || value === '') {
          delete updatedDateObject[name]
        } else {
          updatedDateObject[name] = value
        }
        
        this.keyUp(updatedDateObject)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  input {
    border: none;
    border: 1px solid #777;
    outline: none;
    max-width: 50px;
    padding: 6%;
    width: 86%;
    margin-bottom: 1em;
    color: #000;
    font-size: 1.1em;
    letter-spacing: 1px;

    @media only screen and (min-width: 768px) {
      padding: 15px;
    }
  }

  label {
    display: none;
  }
</style>
