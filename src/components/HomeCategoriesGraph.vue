<template>
  <div class="graph-container">
    <div v-if="template" class="graph">
      <h4>Most Common Categories</h4>
      <router-link
        v-for="category in template.categories"
        :key="category"
        :to="`/search/?q=${category}&exact=true`">
        <div
          :class="`${category} category-graph`"
          :style="`height: ${(booksPerCategory[category] || 0) / totalBooks * 100}%`"
        >
        </div>
      </router-link>
    </div>
    <div v-if="template" class="graph">
      <h4>Most Common Centuries</h4>
      <div
        v-for="century in Object.keys(booksPerCentury)"
        :key="century"
        :class="`cent${century} category-graph`"
        :style="`height: ${(booksPerCentury[century] || 0) / totalBooks * 100}%`"
      >
        {{ century }}{{ century % 10 === 1 ? 'st' : 'th' }}
        -
        {{ booksPerCentury[century] || 0 }}
        books
      </div>
    </div>
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
    booksPerCategory() {
      const booksPerCategory = {}
      this.books.forEach((book) => {
        const count = parseInt(book.id.match(/\d+$/)[0])
        booksPerCategory[book.categories] = booksPerCategory[book.categories] ?
          booksPerCategory[book.categories] + count : count
      })
      return booksPerCategory
    },
    booksPerCentury() {
      const booksPerCentury = {}
      this.books.forEach((book) => {
        const century = parseInt(book.publication.date.year / 100) + 1
        const count = parseInt(book.id.match(/\d+$/)[0])
        if (century) {
          booksPerCentury[century] = booksPerCentury[century] ?
            booksPerCentury[century] + (1 * count) : (1 * count)
        }
      })
      return booksPerCentury
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .graph-container {
    display: flex;
    justify-content: space-around;
  }

  .graph {
    height: 500px;
    width: 33%;
    display: inline-block;
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

    &.Poetry {
      background: #ff0;
    }

    &.Dictionary {
      background: #505;
    }

    &.Drama {
      background: #599;
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

    &.cent15 {
      background: #000;
      color: #ddd;
    }

    &.cent16 {
      background: #333;
      color: #ddd;
    }

    &.cent17 {
      background: #666;

    }

    &.cent18 {
      background: #999;

    }

    &.cent19 {
      background: #bbb;

    }

    &.cent20 {
      background: #ddd;

    }

    &.cent21 {
      background: #fafafa;

    }
  }

  .category-graph {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

</style>
