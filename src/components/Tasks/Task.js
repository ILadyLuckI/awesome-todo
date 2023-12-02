import { mapActions } from "vuex";

export default {
  props: ["task", "id"],
  methods: {
    ...mapActions("tasks", ["updateTask", 'deleteTask']),
    promptToDelete(id) {
      this.$q.dialog({
        title: "Confirm",
        message: "Really delete?",
        cancel: true,
        persistent: true,
      }).onOk(() => {
        this.deleteTask(id)
      });
    },
  },
};
