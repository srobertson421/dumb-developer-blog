<template>
  <form id="new-post" @submit.prevent="submitPost">
    <div>
      <label>Post Title</label>
      <input type="text" v-model="newPost.title" placeholder="Enter title">
    </div>
    <div>
      <label>Post Content</label>
      <textarea cols="50" rows="20" v-model="newPost.content" placeholder="Enter content"></textarea>
    </div>
    <div>
      <label>Post Tags (comma separated)</label>
      <input type="text" v-model="newPost.tags" placeholder="Enter tags">
    </div>
    <div>
      <input type="submit" value="Publish Post">
    </div>
  </form>
</template>

<script>
  export default {
    beforeCreate() {
      let vm = this;
      fetch('/api/tags').then((response) => {
        return response.json();
      }).then((data) => {
        vm.tags = data;
      });
    },
    data() {
      return {
        newPost: {
          title: '',
          content: '',
          tags: ''
        },
        tags: []
      }
    },
    methods: {
      submitPost() {
        console.log(this.newPost);
      }
    }
  }
</script>

<style scoped>
  #new-post {

  }

  #new-post div label {
    display: block;
    margin-bottom: 10px;
  }

  #new-post div input {
    display: block;
    margin-bottom: 10px;
  }
</style>