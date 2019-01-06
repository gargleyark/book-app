<template>
  <div id="app" :class="{loading: loading}">
    <Loader v-if="loading" />
    <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link to="/browse">Browse</router-link>
      <router-link to="/search">Search</router-link>
      <router-link to="/create">Create</router-link>
    </div>
    <router-view />
  </div>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

import Footer from '@/components/Footer.vue'
import Loader from '@/components/Loader.vue'

export default {
  name: 'App',
  components: {
    Footer,
    Loader,
  },
  mounted() {
    this.getBooks()
    this.getFullBookTemplate()
  },
  methods: {
    ...mapActions(['getFullBookTemplate', 'getBooks']),
  },
  computed: {
    ...mapState(['loading']),
  },
}
</script>

<style lang="scss">
  @import url('https://fonts.googleapis.com/css?family=Lato|Slabo+27px');

  html {
    font-family: 'Lato', sans-serif;
    text-align: center;
  }

  body {
    margin: 0px;
  }

  a {
    text-decoration: none;
  }

  h1, h2 {
    font-family: 'Slabo 27px', serif;
  }

  #nav {
    padding: 15px;

    @media screen and (min-width: 710px) {
      padding: 30px;
    }

    a {
      font-weight: bold;
      color: #2c3e50;
      cursor: pointer;
      text-decoration: underline;
      margin: 0px 10px;
      padding: 0px 10px;

      &.router-link-exact-active {
        color: #42b983;
      }

      img {
        width: 40px;
        height: auto;

        @media screen and (min-width: 710px) {
          width: 60px;
        }
      }
    }
  }

  @media screen and (min-width: 710px) {
    .mobile {
      display: none;
    }
  }
</style>
