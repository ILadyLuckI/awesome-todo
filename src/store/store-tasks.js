import { uid } from 'quasar'

const state = {
  tasks: {
    // 'ID1': {
    //   name: 'Café da manhã',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // },
    // 'ID2': {
    //   name: 'Almoçar',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // },
    // 'ID3': {
    //   name: 'Jantar',
    //   completed: false,
    //   dueDate: '2019/05/12',
    //   dueTime: '18:30'
    // }
  }
}

const mutations = {
  updateTask(state, payload) {
    Object.assign(state.tasks[payload.id], payload.updates)
  },
  deleteTask(state, id) {
    app.delete(state.tasks, id)
  },
  addTask(state, payload) {
    // app.set(state.tasks, payload.id, payload.task)
    state.tasks[payload.id] = payload.task
  }
}

const actions = {
  updateTask({ commit }, payload) {
    commit('updateTask', payload)
  },
  deleteTask({ commit }, id) {
    commit('deleteTask', id)
  },
  addTask({ commit }, task) {
    let taskId = uid()
    let payload = {
      id: taskId,
      task: task
    }
    commit('addTask', payload)
  }
}

const getters = {
  tasks: (state) => {
    return state.tasks
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}