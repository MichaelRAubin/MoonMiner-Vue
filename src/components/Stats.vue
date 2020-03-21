<template>
  <div class="stats mx-auto">
    <h3 class="text-info text-center">STATS</h3>
    <div class="border p-4">
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-3 mb-2" />
        <span class="badge badge-warning">Total Cheese: {{$store.state.totalCheese}}</span>
      </div>
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-3 mb-2" />
        <span class="badge badge-warning">Avail Cheese: {{$store.state.availCheese}}</span>
      </div>
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-4 mb-2" />
        <span class="badge badge-warning">Cheese/Sec: 0</span>
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