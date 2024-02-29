<template>
  <div class="container-outer">
    <div class="container-loading box">
      <img src="../assets/images/loader-maskot.gif" id="img-loader" alt="" srcset="">
      <h1>LOADING</h1>
    </div>
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
      // window.location.href = `${urlPml}/login/${this.token}/${this.email}/${this.expiresAt}`;
      // window.location.href = 'http://localhost:5173/login/w2cj5bTMZ76uadfBviyJaz2uDIU2j!vDEIDQOR9joM$r25p69jWv9OyD0kFzEe4z/222112322@stis.ac.id/1709016495717'
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

.container-outer{
  display: flex;
  justify-content: center;
  align-items: center;
}
.container-loading {

  background: red;
  box-shadow: 0 .5rem 1rem rgba(0, 0, 0, .15) !important;
}

.container {
  text-align: center;
  margin-top: 50px;
}

.loading-indicator {
  margin-top: 20px;
}

.box {
  display: flex;
  width: 100vw;
  height: 100vh;
  align-items: center;
  justify-content: center;
}

#img-loader {
  height: 30rem;
}
</style>
