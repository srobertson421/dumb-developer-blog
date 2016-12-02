<template>
  <ul id="blog-list">
    <li v-for="post in posts">
      <h3>{{post.title}} - <small>{{post.author}}</small></h3>
      <p>{{post.content}}</p>
    </li>
  </ul>
</template>

<script>
  export default {
    name: 'blogList',
    beforeCreate() {
      let vm = this;
      fetch('/api/posts').then((response) => {
        return response.json();
      }).then((data) => {
        vm.posts = data;
      });
    },
    data() {
      return {
        posts: []
      }
    }
  }
</script>

<style scoped>
  #blog-list {
    padding: 0;
    list-style: none;
  }
</style>