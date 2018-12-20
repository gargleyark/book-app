<template>
  <div class="shop">
    <SearchForm :query="query"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';
  import SearchForm from '@/components/SearchForm'

  export default {
    name: 'Search',
    components: {
      SearchForm
    },
    data() {
      return {
        query: this.$route.query.q,
        exact: this.$route.query.exact
      }
    }
  }
</script>

<style scoped lang="scss">

</style>
