<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <button @click="login">Login</button>
  </div>
</template>

<script>

export default {
  name: 'LoginView',
  methods: {
    login() {
      localStorage.isAuthenticated = true
      this.$router.push('/')
    }
  }
}
</script>
