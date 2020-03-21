<template>
  <div class="inventory">
    <div class="row">
      <h3 class="text-warning mb-3 ml-5">INVENTORY</h3>
      <div v-for="upgradeItem in upgradeItems" :key="upgradeItem.name" class="upgradeItem col-12">
        <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 10rem;">
          <img :src="upgradeItem.img" height="50" width="50" class="img-fluid m-auto" />
          <div class="card-body">
            <p class="card-text">
              <span class="badge badge-warning">Quantity: {{upgradeItem.quantity}}</span>
            </p>
            <p class="card-text">
              <span class="badge badge-warning">Multiplier: {{upgradeItem.multiplier}}</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inventory",
  computed: {
    upgradeItems() {
      return this.$store.state.upgradeItems;
    }
  }
};
</script>
<style scoped>
.bg-black {
  background-color: black;
}
</style>