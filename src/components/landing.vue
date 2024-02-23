<template>
  <div class="container-fluid">
    <h1><a :href="url">GO TO WEB PML</a></h1>
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
  },
  computed: {
    url() {
      if (this.token && this.email) {
        return `${urlPml}/login/${this.token}/${this.email}/${this.expiresAt}`;
      } else {
        return `${urlPml}/login`;
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
