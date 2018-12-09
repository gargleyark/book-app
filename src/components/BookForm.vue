<template>
  <form>
    <h2>Book</h2>
    <section class="book-form">
      <h3>Book details</h3>
      <TextInput :value="book.title || ''" :keyUp="value => updateNewBook(['title'], value)" label="title" />
      <TextInput :value="book.author || ''" :keyUp="value => updateNewBook(['author'], value)" label="author" />
      <NumberInput :value="book.volumes || ''" :keyUp="value => updateNewBook(['volumes'], value)" label="volumes" />
      <SelectInput :value="book.type || ''" :click="value => updateNewBook(['type'], value)" :options="template.type" label="type" />
      <SelectInput :value="book.language || ''" :click="value => updateNewBook(['language'], value)" :options="template.language" label="language" />
      <SelectInput :value="book.categories || ''" :click="value => updateNewBook(['categories'], value)" :options="template.categories" label="categories" />
      <TextInput :value="book.condition || ''" :keyUp="value => updateNewBook(['condition'], value)" label="condition" />
      <TextInput :value="book.notes || ''" :keyUp="value => updateNewBook(['notes'], value)" label="notes" />
      <SelectInput :value="book.shelfMark || ''" :click="value => updateNewBook(['shelfMark'], value)" :options="bookIds || []" label="bound with" />
    </section>
    <section class="edition-form">
      <h3>Printing details</h3>
      <TextInput :value="(book.publication && book.publication.printer) || ''" :keyUp="value => updateNewBook(['publication', 'printer'], value.split(', '))" label="printer(s)" />
      <TextInput :value="(book.publication && book.publication.location) || ''" :keyUp="value => updateNewBook(['publication', 'location'], value)" label="printing location" />
      <DateInput :value="(book.publication && book.publication.date) || ''" :keyUp="value => updateNewBook(['publication', 'date'], value)" label="printing" />
    </section>
    <section class="binding-form">
      <h3>Binding details</h3>
      <SelectInput :value="(book.binding && book.binding.type) || ''" :click="value => updateNewBook(['binding', 'type'], value)" :options="template.binding.type" label="binding type" />
      <SelectInput :value="(book.binding && book.binding.material) || ''" :click="value => updateNewBook(['binding', 'material'], value)" :options="template.binding.material" label="binding material" />
      <DateInput :value="(book.binding && book.binding.date) || ''" :keyUp="value => updateNewBook(['binding', 'date'], value)" label="binding" />
    </section>
  </form>
</template>

<script>
  import { mapState } from 'vuex';

  import TextInput from '@/components/TextInput.vue';
  import SelectInput from '@/components/SelectInput.vue';
  import NumberInput from '@/components/NumberInput.vue';
  import DateInput from '@/components/DateInput.vue';
  import CheckboxInput from '@/components/CheckboxInput.vue';

  export default {
    name: 'BookForm',
    components: {
      TextInput,
      SelectInput,
      NumberInput,
      CheckboxInput,
      DateInput
    },
    props: {
      template: Object,
      updateBook: Function,
      bookIds: Array
    },
    data() {
      return {
        book: {
          volumes: 1,
        }
      }
    },
    methods: {
      updateNewBook(attributeTree, value) {
        let nextAttribute = this.book
        let index = 0

        while (attributeTree[index]) {
          if (attributeTree[index + 1] === undefined) {
            if (value) {
              nextAttribute[attributeTree[index]] = value
            } else {
              delete nextAttribute[attributeTree[index]]
            }
          } else {
            nextAttribute[attributeTree[index]] = nextAttribute[attributeTree[index]] || {}
            nextAttribute = nextAttribute[attributeTree[index]]
          }
          index+=1
        }

        this.updateBook(this.book)
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  .book-form, .edition-form, .binding-form {
    width: 45%;
    max-width: 600px;
    margin: auto;
  }

  .edition-form, .binding-form {
    display: inline-block;
    width: 35%;
    padding: 5%;
  }
</style>

