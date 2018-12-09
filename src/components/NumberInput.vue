<template>
  <span><label :for="label">{{ label }}</label><input value="1" type="number" :placeholder="label" :name="label" v-model="numberInput" @keyup="() => keyUp(numberInput)"/> </span>
</template>

<script>
  export default {
    name: 'NumberInput',
    props: {
      keyUp: Function,
      label: String,
    },
    data() {
      return {
        numberInput: 1
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
    padding: 6%;
    width: 70%;
    margin: auto;
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

  span {
    display: block;
  }
</style>
