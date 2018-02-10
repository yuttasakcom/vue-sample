<template>
  <nav id="navbar">
    <div class="nav-wrapper green">
      <div class="container">
        <router-link to="/" class="brand-logo">Employee Manager</router-link>
        <ul class="right">
          <li><router-link to="/">Dashboard</router-link></li>
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li><button class="btn black" @click="logout">Logout</button></li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'navbar',
  data: () => ({
    isLoggedIn: false,
    currentUser: false
  }),
  methods: {
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.$router.push('/login')
        })
    }
  }
}
</script>
