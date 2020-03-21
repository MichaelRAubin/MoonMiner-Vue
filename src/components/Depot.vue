<template>
  <div class="depot mx-auto">
    <h3 class="text-success text-center">MOON DEPOT</h3>
    <h5 class="text-light text-center">Click Upgrades</h5>
    <div v-for="mUpgrade in mUpgrades" :key="mUpgrade.name" class="mUpgrades">
      <div class="border p-2 mb-2 bg-black text-lght img-fluid">
        <div class="d-flex align-items-center justify-content-between">
          <div>
            <span class="ml-2 text-warning">
              <img :src="mUpgrade.img" height="50" width="50" class="img-fluid m-auto" />
              {{mUpgrade.name}} - Cost: ${{mUpgrade.price}}
            </span>
          </div>
        </div>
      </div>
    </div>
    <div>
      <h5 class="text-light text-center">Auto Upgrades</h5>
      <div v-for="aUpgrade in aUpgrades" :key="aUpgrade.name" class="aUpgrades">
        <div class="border p-2 mb-2 bg-black text-lght img-fluid">
          <div class="d-flex align-items-center justify-content-between">
            <div>
              <span class="ml-2 text-warning">
                <img :src="aUpgrade.img" height="50" width="50" class="img-fluid m-auto" />
                {{aUpgrade.name}} - Cost: ${{aUpgrade.price}}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Depot",
  computed: {
    mUpgrades() {
      return this.$store.state.mUpgrades;
    },
    aUpgrades() {
      return this.$store.state.aUpgrades;
    }
  }
};
</script>

<style>
.bg-black {
  background-color: black;
}
</style>