<template>
  <div class="container-fluid box">
    <h1>LOADING</h1>
  </div>
</template>

<script>
import { urlPml } from '../request-data/path-url';

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
    setTimeout(() => {
      window.location.href = `${urlPml}/login/${this.token}/${this.email}/${this.expiresAt}`;
    }, 1500);
  },
  // computed: {
  //   url() {
  //     if (this.token && this.email) {
  //       return `${urlPml}/login/${this.token}/${this.email}/${this.expiresAt}`;
  //     } else {
  //       return `${urlPml}/login`;
  //     }
  //   }
  // }
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

.box{
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}
</style>
