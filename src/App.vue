<template>
    <div id="app">
        <Navbar />
        <div class="container">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import Navbar from '@/components/Navbar/Navbar'
export default {
  name: 'app',
  components: {
    Navbar
  },
  created() {
    this.$store.dispatch('todosInit')
  }
}
</script>
