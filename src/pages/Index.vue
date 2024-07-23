<template>
  <q-page padding>
    <input type="text" 
      v-model="message" 
      @keyup.esc="clearMessage" 
      @keyup.enter="alertMessage"
    />
    <button @click="clearMessage">Clear</button>
    <h5 class="border">{{ message }}</h5>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      message: 'I love programing and my cats!'
    }
  },
  methods:{
    clearMessage () {
      this.message = ''
    },
    alertMessage() {
      alert(this.message)
    }
  }
}
</script>
