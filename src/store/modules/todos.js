const state = {
  showDone: false,
  todos: []
}

const getters = {
  todos({ todos }) {
    return todos
  },
  todoLength({ todos }) {
    return parseInt(todos.length) + 1
  },
  showDone({ showDone }) {
    return showDone
  }
}

const mutations = {
  createTodo(state, todo) {
    state.todos.push(todo)
  },
  updateShowDone(state, payload) {
    state.showDone = payload
  }
}

const actions = {
  createTodo({ commit }, todo) {
    commit('createTodo', todo)
  },
  updateShowDone({ commit }, payload) {
    commit('updateShowDone', payload)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}
