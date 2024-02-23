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
      email: '',
      expiresAt: '',
    };
  },
  async mounted() {
    this.token = await localStorage.getItem('token');
    this.email = await localStorage.getItem('email');
    this.expiresAt = await localStorage.getItem('expired');
    console.log(this.token, this.email, this.expiresAt);
  },
  computed: {
    url() {
      if (this.token && this.email) {
        return `https://pml.pkl63.stis.ac.id/login/${this.token}/${this.email}/${this.expiresAt}`;
      } else {
        return `https://pml.pkl63.stis.ac.id/login`;
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
