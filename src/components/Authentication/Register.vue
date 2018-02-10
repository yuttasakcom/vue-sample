<template>
  <div id="register">
    <div class="container">
        <div class="row">
        <div class="col s12 m8 offset-m2">
            <div class="login card-panel grey lighten-4 black-text center">
            <h3>Register</h3>
            <form @submit="register">

                <div class="input-field">
                    <i class="material-icons prefix">email</i>
                    <input type="email" id="email" v-model="email">
                    <label for="email">Email Address</label>
                </div>

                <div class="input-field">
                    <i class="material-icons prefix">lock</i>
                    <input type="password" id="password" v-model="password">
                    <label for="password">Password</label>
                </div>
                
                <button type="submit" class="btn btn-large btn-extended grey lighten-4 black-text">Register</button>
            </form>
            </div>
        </div>
        </div>
    </div>
  </div>
</template>

<script>
import firebase from 'firebase'
export default {
  name: 'register',
  data: () => ({
    email: null,
    password: null
  }),
  methods: {
    register(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            alert(`${user.email}`)
            this.$router.push('/')
          },
          err => alert(err.message)
        )
      e.preventDefault()
    }
  }
}
</script>
