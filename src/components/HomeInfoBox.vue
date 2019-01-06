<template>
  <div class="home-info">
    <h2>Books</h2>
    <p>{{ totalBooks }} books have been recorded so far.</p>
    <h2>Choose a category</h2>
    <ul v-if="template">
      <li v-for="category in template.categories" :key="category">
        <router-link :to="`/search/?q=${category}&exact=true`"><span :class="`${category} category-key`"></span>{{ category.replace('Dictionary', 'Dictionary/Encyclopedia') }}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from 'vuex'

import BookLineItem from '@/components/BookLineItem.vue'

export default {
  name: 'HomeInfoBox',
  computed: {
    ...mapState(['template', 'books']),
    totalBooks() {
      return this.books.reduce((acc, book) => acc + parseInt(book.id.match(/\d+$/)[0]), 0) || 0
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .home-info {
    text-align: left;
  }

  .category-key, .category-graph {
    margin: 0;
    padding: 0;

    &.History {
      background: #500;
    }

    &.Theology {
      background: #0ff;
    }

    &.Art {
      background: #005;
    }

    &.Dictionary {
      background: #505;
    }

    &.Drama {
      background: #599;
    }

    &.Poetry {
      background: #ff0;
    }

    &.Novel {
      background: #a00;
    }

    &.Childrens {
      background: #0aa;
    }

    &.Politics {
      background: #00a;
    }

    &.Architecure {
      background: #aa0;
    }

    &.Biography {
      background: #f00;
    }

    &.Journal {
      background: #ffa;
    }

    &.Periodical {
      background: #aff;
    }

    &.Travel {
      background: #0f0;
    }

    &.Law {
      background: #a0a;
    }

    &.Sciences {
      background: #0a0;
    }

    &.Classics {
      background: #f0f;
    }

    &.Philosophy {
      background: #050;
    }
  }

  .category-key {
    display: inline-block;
    height: 20px;
    width: 20px;
    border-radius: 10px;
    position: relative;
    top: 4px;
    left: -7px;
  }

  li {
    display: block;
  }
</style>
