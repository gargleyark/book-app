<template>
  <form autocomplete="off" v-on:submit.prevent>
    <TextInput :controlled="changeSearchBoxValue" :value="search" :keyUp="(value, e) => e.keyCode !== 13 && getAutoCompleteOptions(value)" label="I want to find..." />
    <ul class="autocomplete" v-if="matchingOptions.length">
      <li v-for="(option, index) in matchingOptions" :key="option[0] + option[1]" @click="e => autoCompleteSearchCriteria(e)">{{ option[0] }}<span class="search-match">{{ search }}</span>{{ option[1] }}</li>
    </ul>
    <Button :action="getMatchingBooks" text="Search"/>
    <p class="error" v-if="error">{{ error }}</p>
    <BookList v-if="filteredBooks.length" :books="filteredBooks" />
  </form>
</template>

<script>
import { mapState, mapActions } from 'vuex'

import TextInput from '@/components/TextInput.vue'
import Button from '@/components/Button'
import BookList from '@/components/BookList'

export default {
  name: 'SearchForm',
  components: {
    TextInput,
    Button,
    BookList,
  },
  props: {
    query: String,
    exact: String,
  },
  data() {
    return {
      matchingOptions: [],
      search: '',
      filteredBooks: [],
      error: '',
      changeSearchBoxValue: false,
    }
  },
  mounted() {
    if (this.query) {
      this.search = this.query
      this.getMatchingBooks(this.exact && this.exact === 'true')
    }
  },
  methods: {
    ...mapActions(['getBooksByQuery']),
    getAutoCompleteOptions(text) {
      const textRegExp = new RegExp(text, 'i')

      if (text.length > 2) {
        this.matchingOptions = this.autoCompleteOptions
          .filter(option => option.match(textRegExp))
          .map(option => option.split(textRegExp))
      } else {
        this.matchingOptions = []
      }
      this.search = text
    },
    autoCompleteSearchCriteria(e) {
      this.search = e.target.innerText
      this.getMatchingBooks()
    },
    getMatchingBooks(exact) {
      this.error = ''
      this.matchingOptions = []
      this.changeSearchBoxValue = true

      this.getBooksByQuery({ search: this.search, exact: exact === true }).then((data) => {
        this.changeSearchBoxValue = false
        this.filteredBooks = data

        if (!data.length) {
          this.error = 'No results found'
        }
      }).catch(e => this.changeSearchBoxValue = false)
    },
  },
  computed: {
    ...mapState(['autoCompleteOptions']),
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  form {
    display: inline-block;
    padding: 5%;
    width: 768px;
  }

  .search-match {
    font-weight: 700;
    color: black;
  }

  .autocomplete {
    list-style: none;
    text-align: left;
    background: #efefef;
    line-height: 1.5;
    padding: 15px;
    width: 70%;
    margin: auto;
    margin-top: -18px;
    text-transform: capitalize;

    > li {
      height: 28px;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      padding: 8px;
      color: #888;

      &:hover {
        background: white;
      }
    }
  }

  .error {
    color: red;
  }
</style>

