<template>
  <article class="content">
    <section>
      <HomeInfoBox />
    </section>
    <section>
      <HomeCategoriesGraph />
    </section>
  </article>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'

import HomeInfoBox from '@/components/HomeInfoBox'
import HomeCategoriesGraph from '@/components/HomeCategoriesGraph'

export default {
  components: {
    HomeInfoBox,
    HomeCategoriesGraph,
  },
  name: 'Home',
}
</script>

<style scoped lang="scss">
  .content {
    margin: auto;
    text-align: center;
    margin-top: 50px;
    width: 90%;
    transition: width 0.5s;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 768px) {
      width: 600px;
      flex-direction: row;

      > section {
        width: 50%;
        display: inline-block;
      }
    }

    @media screen and (min-width: 1200px) {
      width: 1000px;
    }
  }

</style>
