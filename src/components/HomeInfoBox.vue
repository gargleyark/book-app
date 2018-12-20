<template>
  <div class="book-list">
    <h2>Books</h2>
    <p>{{ totalBooks }} books have been recorded so far.</p>
    <h2>Choose a category</h2>
    <ul v-if="template">
      <li v-for="category in template.categories" :key="category">
        <router-link :to="`/search/?q=${category}&exact=true`">{{ category }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
  import { mapState } from 'vuex';

  import BookLineItem from '@/components/BookLineItem.vue';

  export default {
    name: 'HomeInfoBox',
    computed: {
      ...mapState(['template', 'books']),
      totalBooks: function () { 
        return this.books.reduce((acc, book) => acc + parseInt(book.id.match(/\d+$/)[0]), 0) || 0
      }
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
