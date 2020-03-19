<template>
  <div>
    <div class="row">
      <div class="col-12">
        <h3 class="text-warning mb-3 ml-5">INVENTORY</h3>
        <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 10rem;">
          <img src="../assets/miner.png" height="50" width="50" class="img-fluid m-auto" />
          <div class="card-body">
            <p class="card-text">
              <span class="badge badge-warning">Quantity: 0</span>
            </p>
            <p class="card-text">
              <span class="badge badge-warning">Multiplier: 0</span>
            </p>
          </div>
        </div>
        <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 10rem;">
          <img src="../assets/drill.png" height="50" width="50" class="img-fluid m-auto" />
          <div class="card-body">
            <p class="card-text">
              <span class="badge badge-warning">Quantity: 0</span>
            </p>
            <p class="card-text">
              <span class="badge badge-warning">Multiplier: 0</span>
            </p>
          </div>
        </div>
        <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 10rem;">
          <img src="../assets/dynamite.png" height="50" width="50" class="img-fluid m-auto" />
          <div class="card-body">
            <p class="card-text">
              <span class="badge badge-warning">Quantity: 0</span>
            </p>
            <p class="card-text">
              <span class="badge badge-warning">Multiplier: 0</span>
            </p>
          </div>
        </div>
        <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 10rem;">
          <img src="../assets/bulldozer.png" height="50" width="50" class="img-fluid m-auto" />
          <div class="card-body">
            <p class="card-text">
              <span class="badge badge-warning">Quantity: 0</span>
            </p>
            <p class="card-text">
              <span class="badge badge-warning">Multiplier: 0</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
//TODO - need to refactor code to only have one card
<script>
export default {
  name: "Inventory"
};
</script>
<style scoped>
.bg-black {
  background-color: black;
}
</style>