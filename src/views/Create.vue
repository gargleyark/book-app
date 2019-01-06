<template>
  <article v-if="template && template.type">
    <h1>Add new book record</h1>
    <p class="error" v-if="error">{{ error }}</p>
    <BookForm :template="template" :updateBook="updateBook" :bookIds="bookIds || []"/>
    <OwnerForm v-for="(owner, index) in owners" :key="owner.id" :id="owner.id" :index="index" :updateOwner="updateOwner" :deleteOwner="deleteOwner"/>
    <Button :action="addOwner" text="Add Owner"/>
    <Button :action="save" text="Save"/>
  </article>
</template>

<script>
// @ is an alias to /src
import { mapState, mapActions } from 'vuex'

import BookForm from '@/components/BookForm'
import OwnerForm from '@/components/OwnerForm'
import Button from '@/components/Button'

export default {
  name: 'Create',
  components: {
    BookForm,
    OwnerForm,
    Button,
  },
  data() {
    return {
      book: {},
      owners: [],
      error: '',
    }
  },
  computed: {
    ...mapState(['template', 'bookIds']),
  },
  methods: {
    ...mapActions(['createBook', 'getBooks']),
    addOwner() {
      this.owners.push({ id: new Date() - 0 })
    },
    updateBook(book) {
      this.book = book
    },
    updateOwner(index, owner) {
      this.owners[index] = owner
    },
    deleteOwner(index) {
      this.owners.splice(index, 1)
    },
    save() {
      this.book.owners = this.owners
      this.getBooks().then(this.createBook(this.book))
        .then(() => this.scrollToTop(400, () => window.location.reload()))
        .catch((error) => {
          this.scrollToTop(400)
          this.error = error
        })
    },
    scrollToTop(scrollDuration, cb) {
      const scrollHeight = window.scrollY
      const scrollStep = Math.PI / (scrollDuration / 20)
      const cosParameter = scrollHeight / 2

      let scrollCount = 0
      let scrollMargin

      const scrollInterval = setInterval(() => {
        if (window.scrollY != 0) {
          scrollCount += 1
          scrollMargin = cosParameter - cosParameter * Math.cos(scrollCount * scrollStep)
          window.scrollTo(0, scrollHeight - scrollMargin)
        } else {
          clearInterval(scrollInterval)
          if (cb) {
            cb()
          }
        }
      }, 20)
    },
  },
}
</script>

<style scoped lang="scss">
  .error {
    color: red;
  }
</style>
