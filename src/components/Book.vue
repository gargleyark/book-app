<template>
  <section class="book-view">
    <div class="categories">
      <span><router-link :to="`/search/?q=${book.categories}&exact=true`">{{ book.categories }}</router-link></span>
    </div>
    <div class="overview">
      <h1>{{ book.title }}</h1>
      <div class="author" v-if="book.author">By {{ book.author }}</div>
      <div class="book-id"><span>{{ book.id }}</span><span v-if="book.shelfMark"><router-link :to="`/view/${book.shelfMark}`">(Shelfmark {{ book.shelfMark }})</router-link></span></div>
      <div class="volumes"><span>Volumes: </span>{{ book.volumes }}</div>
      <div v-if="book.type"><span>Book type: </span>{{ book.type }}</div>
      <div v-if="book.language"><span>Language:</span>{{ book.language }}</div>
    </div>
    <div class="content-boxes">
      <div>
        <div v-if="book.publication" class="content-box">
          <img <img src="../assets/images/icons/ViewBook/printer.png" alt="Printing information">
          <div class="content-box-holder">
              <div class="box-header">Printing</div>
              <div class="box-text">
                  <p v-if="book.publication.printer"><span>Printed by: </span>{{ book.publication.printer.join(', ') }}</p>
                  <p><span>Printing location: </span>{{ book.publication.location }}</p>
                  <p v-if="book.publication.date"><span>Printing date: </span>{{ book.publication.date.approximate && 'Approximately ' || '' }}{{ book.publication.date.year }}</p>
              </div>
          </div>
        </div>
        <div v-if="book.binding" class="content-box">
          <img src="../assets/images/icons/ViewBook/binding.png" alt="Binding information">
          <div class="content-box-holder">
              <div class="box-header">Binding</div>
              <div class="box-text">
                  <p><span>Binding type: </span>{{ book.binding.type }}</p>
                  <p><span>Binding material: </span>{{ book.binding.material }}</p>
                  <p v-if="book.binding.date"><span>Binding date: </span>{{ book.binding.date.approximate && 'Approximately ' || '' }}{{ book.binding.date.year }}</p>
              </div>
          </div>
        </div>
        <div class="content-box">
          <img src="../assets/images/icons/ViewBook/condition.png" alt="Condition">
          <div class="content-box-holder">
              <div class="box-header">Condition</div>
              <div class="box-text">
                  {{ book.condition }}
              </div>
          </div>
        </div>
        <div class="content-box">
          <img src="../assets/images/icons/ViewBook/info.png" alt="Notes">
          <div class="content-box-holder">
              <div class="box-header">Notes</div>
              <div class="box-text">
                  {{ book.notes || 'None' }}
              </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'book',
  props: {
    book: Object,
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  div > span {
    color: gray;
    padding-right: 10px;
    line-height: 1.5;
  }

  .book-id > span {
    font-size: 14px;
  }

  .categories > span {
    &:before {
      content: '> ';
      color: orange;
    }
  }

  h1 {
    margin-bottom: 0;
  }

  .volumes {
    margin-top: 15px;
  }

  .overview, .categories {
    width: 950px;
    margin: auto;
    margin-bottom: 10px;
  }

  .categories:before {
    content: 'Categories ';
    color: black;
    line-height: 1.5;
  }

  .book-view {
    text-align: left;
  }

  .content-boxes {
    padding: 60px;

    > div {
      display: block;
      text-align: start;
      position: relative;
      inset: auto;
      width: 100%;
      margin: 0px;
      text-align: center;
    }
  }

  .content-box {
    display: inline-block;
    width: 24%;
    height: 290px;
    overflow: overlay;
    text-align: left;
    border-top: 2px solid gray;
    padding-top: 20px;
    margin: 0 0.5%;

    > div {
      display: inline-block;
      width: 70%;
      height: 235px;
      margin-top: 12px;
      margin-left: 20px;

      .box-header {
        font-family: 'Montserrat', sans-serif;
        font-size: 24px;
        padding-bottom: 10px;
      }

      .box-text {
        span {
          color: gray;
        }
      }
    }

    > img {
      display: inline-block;
      width: 50px;
      height: auto;
      vertical-align: top;
    }
  }
</style>
