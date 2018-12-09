<template>
  <span>
    <label :for="label">{{ label }}</label>
    <select :name="label" v-model="selectedOption" @change="() => click(selectedOption)">
      <option v-for="(option, index) in options" v-bind:value="option" :key="option" :value="option">{{ option }}</option>
    </select>
  </span> 
</template>

<script>
  export default {
    name: 'SelectInput',
    props: {
      click: Function,
      label: String,
      options: Array,
      value: String
    },
    data() {
      return {
        selectedOption: this.options[0]
      }
    },
    mounted() {
      this.click(this.options[0])
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  select {
    appearance: none;
    border: none;
    border: 1px solid #777;
    outline: none;
    padding: 6%;
    width: 66%;
    margin: auto;
    margin-bottom: 1em;
    color: #000;
    display: inline-block;
    font-size: 1.1em;
    letter-spacing: 1px;
    border-radius: 0 20px 20px 0;
    background: url(https://image.flaticon.com/icons/svg/32/32195.svg);
    background-size: 15px;
    background-repeat: no-repeat;
    background-position: 95% 50%;

        @media only screen and (min-width: 768px) {
      padding: 15px;
    }
  }

  label {
    width: 25%;
    display: inline-block;
  }

  span {
    display: block;
  }
</style>
