<template>
  <div class="container-fluid">
    <h1><a :href="url">GO TO WEB PML</a></h1>
  </div>
</template>

<script>
export default {
  name: 'LandingPage',
  props: {
    loading: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      token: '',
      email: ''
    };
  },
  async mounted() {
    this.token = await localStorage.getItem('token');
    this.email = await localStorage.getItem('email');
    console.log(this.token, this.email);
  },
  computed: {
    url() {
      if (this.token && this.email) {
        return `http://pml.pkl63.stis.ac.id/login/${this.token}/${this.email}`;
      } else {
        return `http://pml.pkl63.stis.ac.id/login`;
      }
    }
  }
};
</script>

<style scoped>
.container {
  text-align: center;
  margin-top: 50px;
}

.loading-indicator {
  margin-top: 20px;
}
</style>
