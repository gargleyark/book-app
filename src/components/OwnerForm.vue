<template>
  <form>
    <h2>Owner {{ index + 1 }}</h2>
    <section class="owner-form">
      <TextInput :keyUp="value => updateThisOwner(['name'], value)" label="name" />
      <TextInput :keyUp="value => updateThisOwner(['profession'], value)" label="profession" />
    </section>
    <section class="birth-form">
      <h3>Birth</h3>
      <TextInput :keyUp="value => updateThisOwner(['birth', 'location'], value)" label="birth location" />
      <DateInput :keyUp="value => updateThisOwner(['birth', 'date'], value)" label="birth" />
    </section>
    <section class="aquisition-form">
      <h3>Acquisition</h3>
      <TextInput :keyUp="value => updateThisOwner(['acquisition', 'location'], value)" label="acquisition location" />
      <DateInput :keyUp="value => updateThisOwner(['acquisition', 'date'], value)" label="acquisition" />
    </section>
    <section class="death-form">
      <h3>Death</h3>
      <TextInput :keyUp="value => updateThisOwner(['death', 'location'], value)" label="death location" />
      <DateInput :keyUp="value => updateThisOwner(['death', 'date'], value)" label="death" />
    </section>
    <Button :action="() => deleteOwner(index)" text="Delete Owner"/>
  </form>
</template>

<script>
  import TextInput from '@/components/TextInput.vue';
  import SelectInput from '@/components/SelectInput.vue';
  import NumberInput from '@/components/NumberInput.vue';
  import DateInput from '@/components/DateInput.vue';
  import CheckboxInput from '@/components/CheckboxInput.vue';
  import Button from '@/components/Button'
  export default {
    name: 'OwnerForm',
    components: {
      TextInput,
      SelectInput,
      NumberInput,
      CheckboxInput,
      DateInput,
      Button
    },
    props: {
      id: Number,
      updateOwner: Function,
      deleteOwner: Function,
      index: Number
    },
    methods: {
      updateThisOwner(attributeTree, value) {
        let nextAttribute = this.owner
        let index = 0

        while (attributeTree[index]) {
          if (attributeTree[index + 1] === undefined) {
            nextAttribute[attributeTree[index]] = value
          } else {
            nextAttribute[attributeTree[index]] = nextAttribute[attributeTree[index]] || {}
            nextAttribute = nextAttribute[attributeTree[index]]
          }
          index+=1
        }

        this.updateOwner(this.index, this.owner)
      }
    },
    computed: {
      owner() {
        return {
          id: this.id
        }
      }
    }
  };
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
  form {
    display: inline-block;
    width: 35%;
    padding: 5%;
    
  }
</style>

