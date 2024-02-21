<template>
    <div class="container">
        <h1>{{ message }}</h1>
        <div v-if="loading" class="loading-indicator">Loading...</div>
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
      message: "Kelas ga zein?"
    };
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
