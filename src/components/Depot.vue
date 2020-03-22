<template>
  <div class="depot mx-auto">
    <h3 class="text-success text-center">MOON DEPOT</h3>
    <h5 class="text-info text-center">UPGRADES</h5>
    <Tool />
  </div>
</template>

<script>
import Tool from "../components/Tool";
export default {
  name: "Depot",
  components: {
    Tool
  }
};
</script>

<style>
.bg-black {
  background-color: black;
}
.img-pointer {
  cursor: pointer;
}
</style>