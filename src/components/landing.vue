<template>
  <div class="container-fluid">
    <h1>Test</h1>
    <div v-if="loading" class="loading-indicator">Loading...</div>
  </div>
</template>

<script>
import axios from 'axios';
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
      message: "Kelas ga zein?"
    };
  },
  mounted() {
    const email = "222111975@stis.ac.id";
    const data = { email };
    axios.post('https://capi.pkl63.stis.ac.id/get-data-tim', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })
      .then(response => {
        console.log(response.data);
        // Tangani respon dari API
        this.responseData = response.data;
      })
      .catch(error => {
        // Tangani kesalahan jika panggilan gagal
        console.error('Error fetching data:', error);
      });
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
