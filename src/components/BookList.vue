<template>
  <div class="book-list">
    <h2>Books</h2>
    <BookLineItem v-for="(book, index) in books" :even="index % 2 === 0" :key="book.id" :book="book"/>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import BookLineItem from '@/components/BookLineItem.vue';

  export default {
    name: 'BookList',
    props: {
      books: Array
    },
    components: {
      BookLineItem,
    },
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .book-list {
    width: 768px;
    margin: auto;
    line-height: 1.5;
    text-align: left;
  }
</style>
