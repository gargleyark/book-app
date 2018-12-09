<template>
  <span>
    <label :for="label">{{ label }}</label>
    <input type="checkbox" :name="label" @click="click"/> 
  </span>
</template>

<script>
  export default {
    name: 'CheckboxInput',
    props: {
      click: Function,
      label: String
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .links {
    padding-bottom: 15px;

    img {
      width: 32px;
    }

    a {
      padding: 0px 10px;
    }
  }
</style>
