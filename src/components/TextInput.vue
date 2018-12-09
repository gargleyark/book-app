<template>
  <span><label :for="label">{{ label }}</label><input type="text" :placeholder="label" :name="label" v-model="textInput" @keyup="e => keyUp(textInput, e)"/> </span>
</template>

<script>
  export default {
    name: 'TextInput',
    props: {
      keyUp: Function,
      label: String,
      value: String,
      controlled: Boolean
    },
    data() {
      return {
        textInput: this.value
      }
    },
    watch: { 
      controlled(next) {
        if (next) {
          this.textInput = this.value
        }
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
