<template>
  <div class="shop">
    <SearchForm />
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
  }
</script>

<style scoped lang="scss">

</style>
