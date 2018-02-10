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
import db from '@/components/Firebase/firebaseInit'
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
      this.input = ''
      db
        .collection('todos')
        .add({
          text: this.input,
          done: false
        })
        .then(() => {
          this.createTodo({
            id: this.todoLength(),
            text: this.input,
            done: false
          })
        })
        .catch(err => console.log(err))
    }
  }
}
</script>

<style scoped>
.input-field {
  margin-top: 2em;
}
</style>