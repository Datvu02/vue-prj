<template>
  <div class="todoComponent">
      <todoItemComponent/>
  </div>
</template>

<script>
import todoItemComponent from './todoItemComponent.vue'

export default {
  name: 'todoComponent',
  components: {
      todoItemComponent,
  },
  props: {
  }
}
</script>

<style scoped>

</style>
