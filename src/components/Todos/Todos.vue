<template>
    <div id="todos">
        <ul class="collection with-header">
          <li class="collection-header">
            <h4>Todos</h4>
          </li>
          
          <div v-if="todos.length > 0">
            <li 
              class="collection-item"
              v-for="todo in todos.filter(shouldShowTodo)"
              :key="todo.id"
            >
            <p>
              <input type="checkbox" :id="todo.id" v-model="todo.done" />
              <label :for="todo.id"><span :class="{'todo-done': todo.done}">{{ todo.text }}</span></label>
            </p>
              
            </li>
          </div>

          <div v-else>
            <li class="collection-item">
              <div class="preloader-wrapper small active">
                <div class="spinner-layer spinner-green-only">
                  <div class="circle-clipper left">
                    <div class="circle"></div>
                  </div>
                  <div class="gap-patch">
                    <div class="circle"></div>
                  </div>
                  <div class="circle-clipper right">
                    <div class="circle"></div>
                  </div>
                </div>
              </div>
            </li>
          </div>
        </ul>

        <TodoInput />

        <p>
          <input type="checkbox" id="showOne" :value="this.showDone" @click="showAll">
          <label for="showOne">Show Completed Items?</label>
        </p>
    </div>
</template>

<script>
import db from '@/components/Firebase/firebaseInit'
import { mapGetters, mapActions } from 'vuex'
import TodoInput from './TodoInput'
export default {
  name: 'todos',
  created() {
    db
      .collection('todos')
      .get()
      .then(querySnapshot => {
        querySnapshot.forEach(doc => {
          this.createTodo({
            id: doc.id,
            text: doc.data().text,
            done: doc.data().done
          })
        })
      })
  },
  components: {
    TodoInput
  },
  computed: {
    ...mapGetters(['todos', 'showDone'])
  },
  methods: {
    ...mapActions(['createTodo', 'updateShowDone']),
    shouldShowTodo(todo) {
      if (this.showDone) {
        return true
      } else {
        return !todo.done
      }
    },
    showAll() {
      this.updateShowDone(!this.showDone)
    }
  }
}
</script>

<style scoped>
.todo-done {
  color: gainsboro;
  text-decoration: line-through;
  font-style: italic;
}
</style>
