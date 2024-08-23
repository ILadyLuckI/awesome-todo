<template>
  <q-page padding>
    <ul>
      
    </ul>
  </q-page>

</template>

<script>
import Task from "../components/Task.vue"

export default {
  data() {
    return{
      tasks: [
        {
          name: 'Go to shop',
          dueDate: '24/08/2024',
          dueTime: '18:30'
        },
        {
          name: 'Get bananas',
          dueDate: '26/08/2024',
          dueTime: '18:30'
        },
        {
          name: 'Get apples',
          dueDate: '26/08/2024',
          dueTime: '18:30'
        },
      ]
    }
  },
  methods: {
    deleteTask(index) {
      this.tasks.splice(index, 1)
    }
  }
}
</script>

<style>
 
</style>
