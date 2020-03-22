<template>
  <div class="stats mx-auto">
    <h3 class="text-info text-center">STATS</h3>
    <div class="border p-4">
      <div>
        <img
          src="../assets/cheese-wedge.png"
          height="30"
          width="30"
          class="img-fluid mt-1 mr-3 mb-1"
        />
        <span class="badge badge-warning">Total Cheese: {{$store.state.totalCheese}}</span>
      </div>
      <div>
        <img
          src="../assets/cheese-wedge.png"
          height="30"
          width="30"
          class="img-fluid mt-1 mr-3 mb-1"
        />
        <span class="badge badge-warning">Avail Cheese: {{$store.state.availCheese}}</span>
      </div>
      <div>
        <img
          src="../assets/cheese-wedge.png"
          height="30"
          width="30"
          class="img-fluid mr-3 mt-1 mb-1"
        />
        <span class="badge badge-warning">Cheese/Click: {{$store.state.totalModifier}}</span>
      </div>
    </div>
  </div>
</template>

<script>
import Moon from "../components/Moon";
export default {
  name: "Stats",
  computed: {
    availCount() {
      return this.$store.state.availCheese;
    },
    totalCount() {
      return this.$store.state.totalCheese;
    }
  }
};
</script>

<style>
</style>