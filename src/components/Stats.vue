<template>
  <div class="stats mx-auto">
    <h3 class="text-info text-center">STATS</h3>
    <div class="border p-4">
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-3 mb-2" />
        <span class="badge badge-warning">Total Cheese: 0</span>
      </div>
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-3 mb-2" />
        <span class="badge badge-warning">Avail Cheese: 0</span>
      </div>
      <div>
        <img src="../assets/cheese-wedge.png" height="30" width="30" class="img-fluid mr-4 mb-2" />
        <span class="badge badge-warning">Cheese/Sec: 0</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Stats"
};
</script>

<style>
</style>