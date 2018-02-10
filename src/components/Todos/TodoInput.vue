<template>
    <div>
        <form @submit="handleAddTodo($event)">
            <div class="input-field">
                <input type="text" v-model="input">
                <label class="white-black" for="email">Create todo</label>
            </div>
        </form>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  data: () => ({
    input: ''
  }),
  methods: {
    ...mapActions(['createTodo']),
    ...mapGetters(['todoLength']),
    handleAddTodo(e) {
      e.preventDefault()
      this.createTodo({
        id: this.todoLength(),
        text: this.input,
        done: false
      })
      this.input = ''
    }
  }
}
</script>

<style scoped>
.input-field {
  margin-top: 2em;
}
</style>