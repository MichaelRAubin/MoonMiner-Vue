<template>
  <div class="text-center">
    <img
      src="../assets/moon3.jpg"
      height="400"
      width="400"
      class="img-fluid img-pointer"
      @click="collect"
    />
  </div>
</template>

<script>
export default {
  name: "Moon",
  methods: {
    collect() {
      console.log("collecting");
    }
  }
};
</script>
<style scoped>
.img-pointer {
  cursor: pointer;
}
</style>