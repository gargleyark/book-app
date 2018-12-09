<template>
  <section class="owner-view">
    <div class="overview">
      <h1>{{ owner.name }}<span v-if="owner.profession"> - {{ owner.profession }}</span> </h1>
      <div class="life" v-if="hasLifeDate()">
        {{ owner.birth && owner.birth.date && owner.birth.date.year || '?' }}
        -
        {{ owner.death && owner.death.date && owner.death.date.year || '?' }}
      </div>
      <div v-if="hasAcquisitionDate()">
        Aquired the book in {{ owner.acquisition.date.year }}
        <span v-if="owner.acquisition.location"> while living in {{ owner.acquisition.location }}.</span>
      </div>
    </div>
  </section>
</template>

<script>
  export default {
    name: 'owner',
    props: {
      owner: Object
    },
    methods: {
      hasLifeDate() {
        return this.owner.birth && this.owner.birth.date && this.owner.birth.date.year
          || this.owner.death && this.owner.death.date && this.owner.death.date.year
      },
      hasAcquisitionDate() {
        return this.owner.acquisition && this.owner.acquisition.date && this.owner.acquisition.date.year
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  div > span {
    color: gray;
    padding-right: 10px;
    line-height: 1.5;
  }

  h1 > span {
    font-size: 16px;
  }

  .owner-view {
    text-align: left;
    width: 22%;
    display: inline-block;
    margin: 5%;
  }

  h1 {
    margin-bottom: 0;
  }
</style>
