import { mapActions } from 'vuex'

export default {
    data() {
        return {
            taskToSubmit: {
                name: '',
                dueDate: '',
                dueTime: '',
                completed: false
            }
        }
    },
    methods: {
      ...mapActions('tasks', ['addTask']),
      submitForm() {
        // this.$refs.name.validate()
        // if (!this.$refs.name.hasError) {
        // }
        console.log('submitForm :>> ');
        this.submitTask()
      },
      submitTask(){
        this.addTask(this.taskToSubmit)
        this.$emit('close')
      },
      clearDueDate() {
        this.taskToSubmit.dueDate = ''
        this.taskToSubmit.dueTime = ''
      }
    }
}
