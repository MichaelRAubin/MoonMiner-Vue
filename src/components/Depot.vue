<template>
  <div class="mx-auto">
    <h3 class="text-success text-center">MOON DEPOT</h3>
    <p class="text-secondary">Dynamically place depot items to buy here</p>
    <div class="border p-2 mb-2 bg-black text-lght img-fluid">
      <div class="d-flex align-items-center justify-content-between">
        <div>
          <img src="../assets/miner.png" height="65" />
          <span class="ml-2 text-warning">Miner - Cost: 0</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Depot"
};
</script>

<style>
.bg-black {
  background-color: black;
}
</style>