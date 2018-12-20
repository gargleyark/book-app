<template>
  <div class="book-listing-container" :class="{even: even}">
    <router-link :to="`/view/${book.id}`">
      <span class="book-id">{{ book.id }}</span><span class="book-name">{{book.title}}</span>
      <p class="author">{{ book.author || 'Anon.' }}, {{ book.publication.date.year }}<span class="searchMatch" v-if="book.match">, matched "{{ book.match[0].replace(/"/g, '') }}"</span></p>
    </router-link>
  </div>
</template>

<script>

export default {
  name: 'BookLineItem',
  props: {
    book: Object,
    even: Boolean
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .book-id {
    font-size: 14px;

    &:after {
      content: "-";
      padding: 0px 10px;
    }
  }

  .searchMatch {
    font-size: 14px;
    font-style: italic;
  }

  .book-name {
    font-size: 18px;
  }

  .author {
    font-size: 14px;
    margin: 0;
  }

  .book-listing-container {
    background: #fff;
    padding: 7px 20px;

    &.even {
      background: #eee;
    }

    a {
      color: #337ab7;

      &:hover {
        color: #6195FF;
      }
    }
  }
</style>

