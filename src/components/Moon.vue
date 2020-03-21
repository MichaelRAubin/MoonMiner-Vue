<template>
  <div class="moon">
    <div class="text-center">
      <img
        src="../assets/moon3.jpg"
        height="400"
        width="400"
        class="img-fluid img-pointer"
        @click="mine"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: "Moon",
  methods: {
    mine() {
      this.$store.dispatch("mine");
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