<template>
  <ul id="nav-links">
    <router-link tag="li" to="/" class="nav-link">Home</router-link>
    <router-link tag="li" to="/about" class="nav-link">About</router-link>
  </ul>
</template>

<script>
  export default {
    name: 'navbar',
    data() {
      return {
        
      }
    }
  }
</script>

<style scoped>
  #nav-links {
    padding: 0;
    list-style: none;
  }

  #nav-links li.nav-link {
    display: inline-block;
    cursor: pointer;
  }

  #nav-links li.nav-link:hover {
    opacity: 0.6;
  }
</style>