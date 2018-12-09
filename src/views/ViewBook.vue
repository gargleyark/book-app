<template>
  <div class="shop">
    <Book :book="book" />
    <Owner v-for="(owner, index) in book.owners" :owner="owner"/>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'
  import Book from '@/components/Book'
  import Owner from '@/components/Owner'

  export default {
    name: 'bookDetail',
    components: {
      Book,
      Owner
    },
    data() {
      return {
        book: {}
      }
    },
    mounted() {
      this.getBook(this.$route.params.id)
        .then(book => this.book = book)
    },
    updated() {
      this.getBook(this.$route.params.id)
        .then(book => this.book = book)
    },
    methods: {
      ...mapActions(['getBook']),
    }
  }
</script>

<style scoped lang="scss">

@keyframes bg {
  5%{ background: #af4 }
  10%{ background: #f3d }
  15%{ background: #10f }
  20%{ background: #aa0 }
  25%{ background: #f1b }
  30%{ background: #221 }
  35%{ background: #439 }
  40%{ background: #a1e }
  45%{ background: #ebf }
  50%{ background: #4df }
  55%{ background: #d0d }
  60%{ background: #84d }
  65%{ background: #d74 }
  70%{ background: #fff }
  75%{ background: #f93 }
  80%{ background: #d87 }
  85%{ background: #cc9 }
  90%{ background: #f09 }
  95%{ background: #ff0 }
  100%{ background: #2f5 }
}

</style>
