<template>
  <button @click="action">{{ text }}</button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    action: Function,
    text: String,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .download {
    text-align: center;
    width: 100%;
    margin: auto;
    margin-top: 50px;
    margin-bottom: 80px;

    @media only screen and (min-width: 710px) {
      width: 500px;
    }
  }

  .download a {
    width: 75%;
    padding: 15px;
    background: #f50;
    transition: background 0.4s, width 0.4s;
    color: #fff;
    font-family: 'Slabo 27px', serif;
    border-radius: 10px;
    text-decoration: none;
    display: block;
    margin: auto;
    font-size: 36px;

    @media only screen and (min-width: 710px) {
      width: 170px;
      font-size: 18px;
    }
  }

  .download a::after {
    content: "Jeff me up";
  }

  .download a:hover:after {
    content: "Life finds a way.";
  }

  .download a:hover {
    background: #0f5;
    width: 90%;

    @media only screen and (min-width: 710px) {
      width: 250px;
    }
  }

  button {
    background: #f9f9ff;
    padding: 0px 35px;
    color: #222222;
    font-family: "Roboto", sans-serif;
    outline: none !important;
    box-shadow: none !important;
    text-align: center;
    border: 1px solid #eeeeee;
    cursor: pointer;
    transition: all 300ms linear 0s;
    margin: 15px;
    line-height: 50px;
    display: inline-block;
    font-weight: 500;
    font-size: 14px;

    &:hover {
      background: #c5322d;
      color: #fff;
      border-color: #c5322d;
    }
  }
</style>

