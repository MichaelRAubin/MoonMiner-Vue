<template>
  <div class="inventory">
    <div class="row">
      <div>
        <h3 class="text-warning mb-3 ml-5">INVENTORY</h3>
        <div v-for="upGrade in upGrades" :key="upGrade.name" class="upGrades">
          <div class="card border bg-black mb-3 p-2 ml-5" style="max-width: 20rem;">
            <img :src="upGrade.img" height="50" width="50" class="img-fluid m-auto" />
            <div class="card-body">
              <p class="card-text">
                <span class="badge badge-warning">Quantity: {{upGrade.quantity}}</span>
              </p>
              <p class="card-text">
                <span class="badge badge-warning">Modifier: {{upGrade.modifier}}</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Inventory",
  prop: ["upGrade"],
  computed: {
    upGrades() {
      return this.$store.state.upGrades;
    }
  }
};
</script>
<style scoped>
.bg-black {
  background-color: black;
}
</style>